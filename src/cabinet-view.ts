import {bindable} from 'aurelia-framework';
import * as THREE from 'three'

export class CabinetView {

    attached() {
        // Initialize three.js.
        this.initCubeScene();
    }

    initCubeScene() {
        var camera, scene, renderer;
        var mesh;

        camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 400;
        scene = new THREE.Scene();
        //var texture = new THREE.TextureLoader().load('textures/crate.gif');
        var geometry = new THREE.BoxBufferGeometry(200, 200, 200);
        //var material = new THREE.MeshBasicMaterial({ map: texture });
        mesh = new THREE.Mesh(geometry);
        scene.add(mesh);
        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        window.addEventListener('resize', onWindowResize, false);
        
        animate();

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
        
        function animate() {
            requestAnimationFrame(animate);
            mesh.rotation.x += 0.005;
            mesh.rotation.y += 0.01;
            renderer.render(scene, camera);
        }
    }
}