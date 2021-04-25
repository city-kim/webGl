import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

let camera, scene, renderer;
let step;
let animationId;
let bone;
let isLoad = false;

function init() {
  return new Promise ((resolve, reject) => {
  
    let container;
    let spotLight;
    step = 1;
    camera = null;
    scene = null;
    renderer = null;
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }

    container = document.createElement( 'div' );
    document.querySelector('#hill').appendChild( container );

    // camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.set(194, -62, -5);
    camera.lookAt(0, -10, -10);

    scene = new THREE.Scene();

    const textureLoader = new THREE.TextureLoader();
    // const bgTexture = textureLoader.load('https://nkdevil.github.io/webGl/bg_textures/rough_texture.jpg');
    const bgTexture = textureLoader.load('/webGl/bg_textures/rough_texture.jpg');
    scene.background = bgTexture;

    // scene.background = new THREE.Color( 0x000000 );

    scene.add( new THREE.AmbientLight( 0xFFFFFF, 0.1 ) );

    spotLight = new THREE.SpotLight( 0xFFFFFF );
    spotLight.position.set(0, 0, 0)
    spotLight.angle = Math.PI / 10;
    spotLight.distance = 0

    scene.add(spotLight);

    const loader = new GLTFLoader();
    // loader.load( 'https://nkdevil.github.io/webGl/hintze_hall_nhm_london_surface_model/scene.gltf', function ( gltf ) {
    loader.load( '/webGl/hintze_hall_nhm_london_surface_model/scene.gltf', function ( gltf ) {
      isLoad = true;
      bone = gltf.scene
      bone.scale.set(10, 10, 10)
      bone.position.set(41, 9, -89)
      scene.add( bone );
      resolve('GOOD')
      // console.log(gltf)
    }, undefined, function ( error ) {
      reject(error)
      console.error( error );

    } );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    container.appendChild( renderer.domElement );

    window.addEventListener( 'resize', onWindowResize );
    
    // const controls = new OrbitControls( camera, renderer.domElement );
    // controls.target.y = 0.5;
    // controls.update();
  })
}

const render = function() {
  animationId = requestAnimationFrame( render );
  // camera.lookAt( scene.position );
  // console.log(camera.position)
  // if (camera.position.x > -50) {
  //   camera.position.x -= 0.1415 
  //   camera.position.y += 0.008
  //   camera.position.z -= 0.0025
  // }
  renderer.render( scene, camera );
}

const changePosition = function (obj) {
  // bone.position.set(obj.x, obj.y, obj.z)
  camera.position.set(obj.x, obj.y, obj.z)
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

export {render, init, changePosition, isLoad}