import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { AmmoPhysics } from 'three/examples/jsm/physics/AmmoPhysics.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

let camera, scene, renderer, stats;
let physics, position;

let boxes;
// init();

export async function init() {
  physics = await AmmoPhysics();
  position = new THREE.Vector3();

  camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 100 );
  camera.position.set( - 1, 1.5, 2 );
  camera.lookAt( 0, 0.5, 0 );

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x666666 );

  const hemiLight = new THREE.HemisphereLight();
  hemiLight.intensity = 0.35;
  scene.add( hemiLight );

  const dirLight = new THREE.DirectionalLight();
  dirLight.position.set( 5, 5, 5 );
  dirLight.castShadow = true;
  dirLight.shadow.camera.zoom = 2;
  scene.add( dirLight );

  const floor = new THREE.Mesh(
    new THREE.BoxGeometry( 10, 5, 10 ),
    new THREE.ShadowMaterial( { color: 0x111111 } )
  );
  floor.position.y = - 2.5;
  floor.receiveShadow = true;
  scene.add( floor );
  physics.addMesh( floor );

  //
  const material = new THREE.MeshLambertMaterial();
  const matrix = new THREE.Matrix4();

  // Boxes

  // const geometryBox = new THREE.BoxGeometry( 0.1, 0.1, 0.1 );
  const geometryBox = new THREE.IcosahedronGeometry( 0.08, 5 );
  // const geometryBox = new THREE.CylinderGeometry( 0.1, 0.1, 0.1, 32 );
  // const geometryBox = new THREE.OctahedronGeometry( 0.1, 0 );
  boxes = new THREE.InstancedMesh( geometryBox, material, 200 );

  let controls;
  const loader = new GLTFLoader();
  var dummy = new THREE.Object3D();
  loader.load( '/bit_coin/scene.gltf', function ( gltf ) {
    gltf.scene.traverse( function ( child ) {
      if ( child.isMesh ) {
        // boxes = new THREE.InstancedMesh( child.geometry, child.material, 100 );
        // boxes.scale.set(0.01, 0.01, 0.01);

        boxes.instanceMatrix.setUsage( THREE.DynamicDrawUsage ); // will be updated every frame
        boxes.castShadow = true;
        boxes.receiveShadow = true;
        // boxes.setMatrixAt( 0, dummy.matrix );

        scene.add( boxes );
      
        for ( let i = 0; i < boxes.count; i ++ ) {
      
          matrix.setPosition( Math.random() - 0.5, Math.random() * 2, Math.random() - 0.5 );
          boxes.setMatrixAt( i, matrix );

        }
        
        physics.addMesh( boxes, 1 );
      
        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.shadowMap.enabled = true;
        renderer.outputEncoding = THREE.sRGBEncoding;
        document.body.appendChild( renderer.domElement );
      
        stats = new Stats();
        document.body.appendChild( stats.dom );
      
        controls = new OrbitControls( camera, renderer.domElement );
        controls.target.y = 0.5;
        controls.update();
      
        animate();
      }
    });
  }, undefined, function ( error ) {
    console.error( error );
  } );

}

function animate() {

  requestAnimationFrame( animate );

  let index = Math.floor( Math.random() * boxes.count );

  position.set( 0, Math.random() + 1, 0 );
  // physics.setMeshPosition( boxes, position, index );

  renderer.render( scene, camera );

  stats.update();

}