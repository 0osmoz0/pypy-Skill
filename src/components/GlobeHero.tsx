"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Sphere, Line } from "@react-three/drei";
import * as THREE from "three";
import { FloatingDots } from "@/components/ui/floating-dots";
import gsap from "gsap";
import { useRouter } from "next/navigation";

interface CountryFeature {
  type: "Feature";
  geometry: {
    type: "MultiPolygon" | "Polygon";
    coordinates: number[][][][];
  };
  properties: {
    NAME: string;
  };
}

function GlobeCountries() {
  const [countries, setCountries] = useState<CountryFeature[]>([]);
  const groupRef = useRef<THREE.Group>(null);
  const globeRadius = 1.005;

  useEffect(() => {
    fetch("/countries-110m.geojson")
      .then((response) => response.json())
      .then((data) => setCountries(data.features));
  }, []);

  const convertCoordinates = (lon: number, lat: number) => {
    const phi = THREE.MathUtils.degToRad(lon);
    const theta = THREE.MathUtils.degToRad(90 - lat);

    return new THREE.Vector3(
      globeRadius * Math.sin(theta) * Math.cos(phi),
      globeRadius * Math.sin(theta) * Math.sin(phi),
      globeRadius * Math.cos(theta)
    );
  };

  return (
    <group ref={groupRef}>
      {countries.map((country, i) => {
        const coordinates =
          country.geometry.type === "MultiPolygon"
            ? country.geometry.coordinates
            : [country.geometry.coordinates];

        return coordinates.flatMap((polygon, pi) =>
          polygon.flatMap((ring, ri) => {
            const positions = ring.map((coord) => {
              const [lon, lat] = coord as [number, number];
              return convertCoordinates(lon, lat);
            });

            return (
              <Line
                key={`${i}-${pi}-${ri}`}
                points={positions}
                color="white"
                lineWidth={0.5}
                transparent
                opacity={0.8}
              />
            );
          })
        );
      })}
    </group>
  );
}

function ZoomableGlobe({ onZoomStart }: { onZoomStart: () => void }) {
  const groupRef = useRef<THREE.Group>(null);
  const globeRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();
  const [isAnimating, setIsAnimating] = useState(false);
  const indiaLon = 78.9629;
  const indiaLat = 20.5937;

  useFrame(({ clock }) => {
    if (groupRef.current && !isAnimating) {
      // Rotation automatique du groupe entier
      groupRef.current.rotation.y =
        THREE.MathUtils.degToRad(-indiaLon) + clock.getElapsedTime() * 0.05;
    }
  });

  const handleClick = (event: any) => {
    event.stopPropagation();
    if (isAnimating) return;
    
    console.log("🌍 GLOBE CLICKED! Starting zoom animation...");
    console.log("Event details:", event);
    setIsAnimating(true);

    // Animation caméra - zoom cosmique plus visible
    gsap.to(camera.position, {
      z: 0.3, // Plus proche pour voir l'effet
      y: 0.1, // Ajuster aussi la hauteur
      duration: 2.0, // Plus long pour voir l'animation
      ease: "power2.inOut",
      onUpdate: () => {
        console.log("Camera position:", camera.position.z, camera.position.y);
      },
      onComplete: () => {
        console.log("Camera zoom complete! Navigating to next page...");
        // Transition de page
        onZoomStart();
      },
    });

    // Animation de rotation accélérée pendant le zoom
    if (groupRef.current) {
      gsap.to(groupRef.current.rotation, {
        y: groupRef.current.rotation.y + Math.PI * 6, // Plus de tours
        duration: 2.0,
        ease: "power2.inOut",
      });
      
      // Effet de scale pour rendre le zoom plus visible
      gsap.to(groupRef.current.scale, {
        x: 1.5,
        y: 1.5,
        z: 1.5,
        duration: 2.0,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <group
      ref={groupRef}
      rotation={[THREE.MathUtils.degToRad(-indiaLat), 0, 0]}
    >
      {/* Main globe sphere */}
      <mesh
        ref={globeRef}
        onClick={(event) => {
          console.log("🌍 CLICK EVENT DETECTED!");
          event.stopPropagation();
          handleClick(event);
        }}
        onPointerDown={(event) => {
          console.log("🌍 POINTER DOWN!");
          event.stopPropagation();
        }}
        onPointerUp={(event) => {
          console.log("🌍 POINTER UP!");
          event.stopPropagation();
        }}
        onPointerOver={(event) => {
          document.body.style.cursor = 'pointer';
          console.log("Pointer over globe");
          // Effet de hover - légèrement plus brillant
          if (event.object && event.object.material) {
            event.object.material.emissive = new THREE.Color(0x111111);
          }
        }}
        onPointerOut={(event) => {
          document.body.style.cursor = 'auto';
          console.log("Pointer out of globe");
          // Retour à la normale
          if (event.object && event.object.material) {
            event.object.material.emissive = new THREE.Color(0x000000);
          }
        }}
      >
        <sphereGeometry args={[0.97, 64, 64]} />
        <meshPhongMaterial
          color="#182b4b"
          opacity={0.95}
          transparent
          specular="#204080"
          shininess={5}
        />
      </mesh>

      {/* Country borders */}
      <GlobeCountries />

      {/* Equator */}
      <group>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1, 0.2, 64]} />
          <meshBasicMaterial
            color="#2a4a80"
            side={THREE.DoubleSide}
            transparent
            opacity={0}
          />
        </mesh>
      </group>
    </group>
  );
}

export function GlobeHero() {
  const router = useRouter();
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleZoomStart = () => {
    console.log("Starting fade to black...");
    // Animation overlay noir
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 1.0, // Plus rapide pour la transition
        ease: "power2.inOut",
        onComplete: () => {
          console.log("Fade complete! Navigating to next page...");
          // Navigation après le fondu
          router.push("/nextpage");
        },
      });
    }
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-black to-blue-950">
      {/* Overlay noir pour le fondu - EN DEHORS du Canvas */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black pointer-events-none z-50"
        style={{ opacity: 0 }}
      />

      <FloatingDots
        className="w-full"
        maxRadius={0.5}
        maxSpeed={0.8}
        minSpeed={0.1}
      />
      
      {/* Titre du site */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-40">
        <h1 className="text-5xl font-black text-white text-center tracking-wider uppercase" 
            style={{
              fontFamily: 'Arial, sans-serif',
              textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4)',
              letterSpacing: '0.2em',
              background: 'linear-gradient(45deg, #ffffff, #a0a0a0, #ffffff)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'glow 2s ease-in-out infinite alternate'
            }}>
          PYPYSKILL
        </h1>
      </div>
      
      <div className="absolute inset-0">
        <Canvas
          camera={{
            position: [0, 0.0, 2.2],
            fov: 75,
          }}
        >
          <ambientLight intensity={0.75} />
          <directionalLight position={[3, 3, 3]} intensity={1.5} />
          <ZoomableGlobe onZoomStart={handleZoomStart} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            autoRotate={false}
            minDistance={1.5}
            maxDistance={3}
            target={[0, 0.2, 0]}
            enableDamping={false}
          />
        </Canvas>
      </div>
      
      {/* Bouton d'action */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-40">
        <button
          onClick={() => {
            console.log("📝 INSCRIPTION BUTTON CLICKED!");
            window.location.href = '/login';
          }}
          className="zoom-button"
        >
          <span>INSCRIPTION</span>
        </button>
      </div>
    </div>
  );
}