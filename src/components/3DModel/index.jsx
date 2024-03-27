import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber"; // Import useFrame
import { OrbitControls, useGLTF, Float } from "@react-three/drei";

import CanvasLoader from "./loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  const [position, setPosition] = useState([0, isMobile ? -3 : -1.3, isMobile ? -2.2 : -1.5]);

useFrame(() => {
  // Update only the Y-coordinate of the position
  setPosition(prevPosition => [prevPosition[0], prevPosition[1] + Math.sin(performance.now() / 1000) * 0.001, prevPosition[2]]);
});


  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <spotLight
          position={[-20, 60, 10]}
          angle={0.12}
          penumbra={1}
          intensity={3}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={10} />
        <primitive
          object={computer.scene}
          scale={isMobile ? [0.5, 0.5, 0.5] : [0.4, 0.4, 0.4]}
          position={position} // Use dynamic position
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
    </Float>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div
      style={{
        width: "60%",
        height: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "40%"
      }}
    >
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 10], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        style={{ width: "100%", height: "100%" }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
