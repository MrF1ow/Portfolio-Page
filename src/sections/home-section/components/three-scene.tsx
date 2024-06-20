import { useEffect, useRef } from "react";
import * as THREE from "three";

interface ThreeSceneProps {
  width: number;
  height: number;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ width, height }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const renderer = useRef<THREE.WebGLRenderer>(new THREE.WebGLRenderer());
  const scene = useRef<THREE.Scene>(new THREE.Scene());
  const camera = useRef<THREE.PerspectiveCamera>(
    new THREE.PerspectiveCamera(60, width / height, 0.1, 2000)
  );

  useEffect(() => {
    const { current: mount } = mountRef;
    if (!mount) return;

    renderer.current.setSize(width, height);
    mount.appendChild(renderer.current.domElement);

    //create a dodecahedron
    const geometry1 = new THREE.DodecahedronGeometry(0.8);
    const material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const dodecahedron = new THREE.Mesh(geometry1, material1);

    const edgesGeometry = new THREE.EdgesGeometry(geometry1);
    const edgesMaterial = new THREE.LineBasicMaterial({
      linewidth: 5,
      color: 0xffffff,
    });
    const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    dodecahedron.add(edges); // Add edges to the cube

    dodecahedron.rotation.x = Math.PI / 6;
    dodecahedron.rotation.y = Math.PI / 3;
    dodecahedron.position.set(0, -1, 0); // Adjust Y position to move it down to the bottom

    scene.current.add(dodecahedron);

    // Create a pyramid
    const pyramidGeometry = new THREE.ConeGeometry(0.6, 1, 4);
    const pyramidMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const pyramid = new THREE.Mesh(pyramidGeometry, pyramidMaterial);

    pyramid.position.set(1, 0.6, 0);
    pyramid.rotation.z = Math.PI;
    pyramid.rotation.y = Math.PI / 6;
    pyramid.rotation.x = Math.PI / 6;

    dodecahedron.add(pyramid);

    // Create a cube
    const cubeGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    cube.position.set(0.5, 1.8, 0);
    cube.rotation.x = Math.PI / 4;
    cube.rotation.y = Math.PI / 4;

    dodecahedron.add(cube);

    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const context = canvas.getContext("2d");
    if (context) {
      const gradient = context.createLinearGradient(0, 0, 0, 256);
      gradient.addColorStop(0.7, "#000e14"); // Dark blue
      gradient.addColorStop(1, "#18392e"); // Medium dark green
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);
      const gradientTexture = new THREE.CanvasTexture(canvas);
      scene.current.background = gradientTexture;
    }

    // Camera setup
    camera.current.position.z = 5.5;

    renderer.current.render(scene.current, camera.current);

    return () => {
      mount.removeChild(renderer.current.domElement);
    };
  }, [width, height]);

  return <div ref={mountRef} />;
};

export default ThreeScene;
