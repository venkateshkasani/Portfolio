import { Canvas } from '@react-three/fiber'
import * as Three from 'three';

const Dummy = () => {
  function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    Renderer.render(Scene, Camera);
  }
  const Scene = new Three.Scene();
  const Camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const Renderer = new Three.WebGLRenderer();
  // Renderer.setSize = window.innerWidth,window.innerHeight;
  Renderer.setAnimationLoop( animate )
  document.body.appendChild(Renderer.domElement);
  const geometry = new Three.BoxGeometry(2,2,2);
  const material = new Three.MeshBasicMaterial({color:0x00ff00});
  const cube = new Three.Mesh(geometry, material);
  Scene.add(cube);
  Camera.position.z = 5;

  return (
        <div>
          <Canvas>
            <ambientLight intensity={0.1} />
            <directionalLight position={[0,0,5]} color='red' />
            <mesh position={[0,0,1]}>
                <boxGeometry args={[2,2,2]} />
                <meshPhongMaterial />
            </mesh>
            <ambientLight intensity={0.1} />
            <directionalLight position={[0,0,5]} color="green" />
        </Canvas>
        </div>
  )
}

export default Dummy