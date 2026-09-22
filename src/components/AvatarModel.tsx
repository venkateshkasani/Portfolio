import React, { useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';

function Model(props: any) {
  const { scene } = useGLTF('/avatar.glb');
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    // 1. Calculate the bounding box FIRST so we can use its dimensions for the gradient
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    
    // 2. Create a custom ShaderMaterial with a GSAP-animatable reveal!
    const gradientMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color1: { value: new THREE.Color("rgb(116, 116, 116)") }, 
        color2: { value: new THREE.Color("rgb(3, 97, 138)") },   
        bboxMin: { value: box.min },
        bboxMax: { value: box.max },
        revealProgress: { value: -0.1 } // Starts fully hidden
      },
      vertexShader: `
        varying vec3 vPosition;
        void main() {
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 bboxMin;
        uniform vec3 bboxMax;
        uniform float revealProgress;
        varying vec3 vPosition;
        
        void main() {
          // Normalize the Y position (bottom to top)
          float y = (vPosition.y - bboxMin.y) / (bboxMax.y - bboxMin.y);
          
          // Discard pixels above our animated reveal line (draws the model bottom-to-top)
          if (y > revealProgress) {
             discard; 
          }

          // Normalize the X position for our blue gradient
          float x = (vPosition.x - bboxMin.x) / (bboxMax.x - bboxMin.x);
          vec3 baseColor = mix(color1, color2, x);

          // Add a futuristic bright white scanline right at the leading edge of the reveal!
          float scanline = smoothstep(revealProgress - 0.05, revealProgress, y);
          vec3 finalColor = mix(baseColor, vec3(1.0, 1.0, 1.0), scanline);
          
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `
    });

    // 3. Apply the material to all meshes
    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.material = gradientMaterial;
      }
    });
    
    // 4. Center the model (puts the origin exactly at the feet)
    scene.position.x += (scene.position.x - center.x);
    scene.position.y += (scene.position.y - box.min.y);
    scene.position.z += (scene.position.z - center.z);
    
    // Push it up slightly so the feet don't get cropped by the bottom of the container
    const finalY = -1.5; 
    const finalX = window.innerWidth > 768 ? 1.0 : 0;
    
    // --- THE CRAZY GSAP ANIMATION ---
    scene.scale.set(1, 1, 1); 
    
    // Start pushed right into the camera lens (Z=3) and slightly left
    gsap.fromTo(scene.position, 
      { x: -1, y: finalY + 1.5, z: 3 }, 
      { x: finalX, y: finalY, z: 0, duration: 3, ease: "power4.out" }
    );
    
    // Animate to Hero size (reduced by 5% from 2.5 to 2.375)
    gsap.to(scene.scale, {
      x: 2.375, y: 2.375, z: 2.375, duration: 3, ease: "power4.out"
    });
    
    // The Zero-G Tumble: start tilted on all axes, then smoothly stabilize
    gsap.fromTo(scene.rotation, 
      { x: 0.5, y: Math.PI * 2.5, z: -0.3 }, 
      { 
        x: 0, 
        y: 0, 
        z: 0, 
        duration: 3.5, 
        ease: "power3.out",
        onComplete: () => {
          // Enable interactive mouse follow!
          setIntroFinished(true);
        }
      }
    );

    // The Shader Reveal: "3D Print" the avatar from bottom to top!
    gsap.to(gradientMaterial.uniforms.revealProgress, {
      value: 1.1, // Go slightly above 1 to clear the scanline
      duration: 3,
      ease: "power2.out"
    });

  }, [scene]);

  const baseRotation = React.useRef(0);

  // Subtle Mouse Follow Interaction + Continuous Auto-Rotation
  useFrame((state, delta) => {
    if (introFinished) {
      // 1. Constantly increment the base rotation slowly over time
      baseRotation.current -= delta * 0.2; 
      
      // 2. Calculate the target positions based on cursor PLUS the base rotation
      const targetX = (state.pointer.y * 0.15); // Look up/down slightly
      const targetY = baseRotation.current + (state.pointer.x * 0.4);  // Continuous spin + Look left/right

      // 3. Smoothly interpolate the actual 3D model towards the combined target
      scene.rotation.x = THREE.MathUtils.lerp(scene.rotation.x, targetX, 0.05);
      scene.rotation.y = THREE.MathUtils.lerp(scene.rotation.y, targetY, 0.05);
    }
  });

  return <primitive object={scene} {...props} />;
}

export default function AvatarModel() {
  return (
    <Canvas 
      camera={{ position: [0, 0.8, 3.5], fov: 45 }}
      dpr={[1, 2]} // Ensures sharp rendering on high-DPI (retina) displays!
      gl={{ antialias: true }} // Explicitly force antialiasing
    >
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <PresentationControls
          global={false} 
          cursor={true} 
          snap={true} 
          speed={1.5} 
          zoom={1} 
          rotation={[0, 0, 0]} 
          polar={[-Math.PI / 4, Math.PI / 4]} 
          azimuth={[-Math.PI / 2, Math.PI / 2]}
        >
          <Model scale={1} />
        </PresentationControls>
      </Suspense>
    </Canvas>
  );
}
