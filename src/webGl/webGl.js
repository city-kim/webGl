import * as THREE from 'three'

import { DragControls } from 'three/examples/jsm/controls/DragControls.js';

let container;
let camera, scene, renderer;
let controls, group;
let enableSelection = false;
let mouseX = 0, mouseY = 0;
let light;
const objects = [];
let cube;

const mouse = new THREE.Vector2(), raycaster = new THREE.Raycaster();

export function init() {

  container = document.createElement( 'div' );
  document.body.appendChild( container );

  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 5000 );
  camera.position.z = 1000;

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x000000 );

  scene.add( new THREE.AmbientLight( 0x505050 ) );

  light = new THREE.SpotLight( 0xffffff, 1.5 );
  light.position.set( 0, 0, 0 );
  light.angle = Math.PI / 9;

  // light.castShadow = true;
  light.shadow.camera.near = 1000;
  light.shadow.camera.far = 4000;
  light.shadow.mapSize.width = 1024;
  light.shadow.mapSize.height = 1024;

  scene.add( light );

  const geometry = new THREE.BoxGeometry( 40, 40, 40 );
  const material = new THREE.MeshBasicMaterial( { color: 0x333333 } );

  cube = new THREE.Mesh( geometry, material );
  cube.rotation.x = 0.5;
  cube.rotation.y = 0.8;
  cube.rotation.z = 0;

  cube.scale.x = 10;
  cube.scale.y = 10;
  cube.scale.z = 10;
  cube.castShadow = true;
  cube.receiveShadow = true;
  objects.push( cube );
  scene.add( cube );

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );

  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;

  container.appendChild( renderer.domElement );

  controls = new DragControls( [...objects], camera, renderer.domElement );
  controls.addEventListener( 'drag', onDrag );

  window.addEventListener( 'resize', onWindowResize );
  document.addEventListener( 'mousemove', onDocumentMouseMove );
  document.addEventListener( 'mouseover', onDocumentMouseMove );
  document.addEventListener( 'mouseup', onDocumentMouseUP );
}

export function render() {
  // console.log('render!')
  requestAnimationFrame( render );

  camera.position.x += ( mouseX - camera.position.x ) * 0.05;
  camera.position.y += ( - mouseY - camera.position.y ) * 0.05;
  camera.lookAt( scene.position );

  // light.position.set( camera.position.x, camera.position.y, camera.position.z ).normalize();
  renderer.render( scene, camera );
}

export function changeRotate(obj) {
  // console.log(cube)
  // cube.rotation.x = obj.x
  // cube.rotation.y = obj.y
  // cube.rotation.z = obj.z
  // cube.geometry.attributes.rotation.needsUpdate = true;
  light.position.set( obj.x, obj.y, obj.z );
  // console.log(light)
}

function onWindowResize() {
  // console.log('resize!')
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}
function onDrag (event) {
  // console.log(event.object.position.x, event.object.position.y, event.object.position.z)
}

function onDocumentMouseMove( event ) {
  
  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;
  mouseX = ( event.clientX - windowHalfX ) / 2;
  mouseY = ( event.clientY - windowHalfY ) / 2;

}

function onDocumentMouseUP (event) {
  // console.log('?')
  // console.log(event)
}
