import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


let camera, scene, renderer;
let step;
let animationId;
let isLoad = false;

function init() {
  return new Promise ((resolve, reject) => {
    let container;
    let bone;
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
    document.querySelector('#bone').appendChild( container );

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 5000 );
    camera.position.z = 1000;

    scene = new THREE.Scene();

    const textureLoader = new THREE.TextureLoader();
    const bgTexture = textureLoader.load('https://nkdevil.github.io/webGl/bg_textures/rough_texture.jpg');
    // const bgTexture = textureLoader.load('/webGl/bg_textures/rough_texture.jpg');
    scene.background = bgTexture;

    // scene.background = new THREE.Color( 0x000000 );

    scene.add( new THREE.AmbientLight( 0x252525 ) );

    spotLight = new THREE.SpotLight( 0xFFFFFF );
    spotLight.position.set(168, 1469, 1097)
    spotLight.angle = Math.PI / 10;
    spotLight.distance = 0

    scene.add(spotLight);
    const helper = new THREE.SpotLight( spotLight );
    scene.add( helper );

    const loader = new GLTFLoader();
    loader.load( 'https://nkdevil.github.io/webGl/remains/scene.gltf', function ( gltf ) {
    // loader.load( '/webGl/remains/scene.gltf', function ( gltf ) {
      isLoad = true
      bone = gltf.scene
      bone.scale.set(100,100,100)
      bone.position.set(-285, -150, 580)
      scene.add( bone );
      resolve('GOOD!')
    }, undefined, function ( error ) {
      reject(error)
      console.error( error );
    });
  
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
  
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
  
    container.appendChild( renderer.domElement );
  
    window.addEventListener( 'resize', onWindowResize );
  })
}

const render = function() {
  animationId = requestAnimationFrame( render );
  camera.lookAt( scene.position );
  if (camera.position.x > 150 && camera.position.y > 150) {
    step = 2
  }
  if (camera.position.x < 0 && camera.position.y > 150) {
    step = 3
  }
  if (camera.position.x < 0 && camera.position.y < 0) {
    step = 1
  }
  if (step == 1) {
    camera.position.x += 0.5
    camera.position.y += 0.5
  } else if (step == 2) {
    camera.position.x -= 0.5
  } else if (step == 3) {
    camera.position.y -= 0.5
  }
  renderer.render( scene, camera );
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

export {render, init, isLoad}