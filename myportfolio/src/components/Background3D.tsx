import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleNetwork = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const particlesCount = 2000;

  // Create particles
  const particles = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const color = new THREE.Color();

    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;

      // Create a gradient from blue to purple
      color.setHSL(0.6 + Math.random() * 0.1, 0.8, 0.5);
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    return { positions, colors };
  }, []);

  // Animation
  useFrame((state) => {
    if (particlesRef.current) {
      const time = state.clock.getElapsedTime();
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(time + i) * 0.001;
        positions[i3] += Math.cos(time + i) * 0.001;
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={particles.positions}
          itemSize={3}
          args={[particles.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={particles.colors}
          itemSize={3}
          args={[particles.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-900/50" />
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <ParticleNetwork />
      </Canvas>
    </div>
  );
};

export default Background3D; 