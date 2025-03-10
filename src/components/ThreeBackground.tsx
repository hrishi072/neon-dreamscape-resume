
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import { random } from '@/lib/animations';

// Particle component for floating objects
interface ParticleProps {
  position: [number, number, number];
  color?: string;
  size?: number;
  rotationSpeed?: number;
}

const Particle: React.FC<ParticleProps> = ({ 
  position, 
  color = '#00FFFF', 
  size = 0.2,
  rotationSpeed = 0.005
}) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += rotationSpeed;
      mesh.current.rotation.y += rotationSpeed * 0.8;
      
      // Add subtle float movement
      mesh.current.position.y += Math.sin(state.clock.elapsedTime * 0.5) * 0.001;
    }
  });
  
  return (
    <mesh ref={mesh} position={position}>
      <icosahedronGeometry args={[size, 0]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={0.5} 
        metalness={0.8} 
        roughness={0.2}
      />
    </mesh>
  );
};

// Grid component
const Grid: React.FC = () => {
  const gridRef = useRef<THREE.LineSegments>(null);
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.elapsedTime * 0.1) % 5;
    }
  });
  
  return (
    <lineSegments ref={gridRef} position={[0, -5, -10]}>
      <gridHelper args={[40, 40, '#0088FF', '#2A0066']} />
      <meshBasicMaterial opacity={0.1} transparent />
    </lineSegments>
  );
};

// Floating geometric shapes
const FloatingGeometries: React.FC = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    position: [
      random(-15, 15),
      random(-8, 8),
      random(-10, -5)
    ] as [number, number, number],
    color: i % 3 === 0 
      ? '#00FFFF' 
      : i % 3 === 1 
        ? '#FF00FF' 
        : '#FFFF00',
    size: random(0.1, 0.3),
    rotationSpeed: random(0.002, 0.01)
  }));
  
  return (
    <>
      {particles.map((particle) => (
        <Particle 
          key={particle.id} 
          position={particle.position} 
          color={particle.color}
          size={particle.size}
          rotationSpeed={particle.rotationSpeed}
        />
      ))}
    </>
  );
};

// Main Component
const ThreeBackground: React.FC = () => {
  return (
    <Canvas style={{ position: 'fixed' }} camera={{ position: [0, 0, 5], fov: 75 }}>
      <fog attach="fog" color="#060620" near={10} far={30} />
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff00ff" />
      <pointLight position={[10, -10, -5]} intensity={0.5} color="#00ffff" />
      
      <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
      <Grid />
      <FloatingGeometries />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        rotateSpeed={0.1}
        autoRotate
        autoRotateSpeed={0.1}
      />
    </Canvas>
  );
};

// Cursor component to enhance the experience
export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    
    const handleMouseDown = () => {
      cursor.classList.add('active');
    };
    
    const handleMouseUp = () => {
      cursor.classList.remove('active');
    };
    
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('clickable')) {
        cursor.classList.add('active');
      }
    };
    
    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('clickable')) {
        cursor.classList.remove('active');
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    const clickableElements = document.querySelectorAll('a, button, .clickable');
    clickableElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      clickableElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
  
  return <div ref={cursorRef} className="custom-cursor"></div>;
};

export default ThreeBackground;
