import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MacbookModel14 from "./models/Macbook-14";
import StudioLights from "./three/StudioLights";

const ProductViewer = () => {
  return (
    <section id="product-viewer" className="w-full mt-10 flex flex-col items-center px-4">

      <h2 className="text-3xl font-bold text-center mb-4">Tu espacio creativo</h2>
      <p className="text-center opacity-70 mb-10 max-w-xl">
        Visualiza una de nuestras herramientas de trabajo. Muy pronto aquí aparecerá nuestro modelo actualizado 📱
      </p>
      
      <Canvas
        id="canvas"
        className="w-full h-[600px]" 
        camera={{ position: [0, 2, 5], fov: 50 }}
      >
        <StudioLights />

        <MacbookModel14 scale={0.06} position={[0, 0, 0]} />

        <OrbitControls enableZoom={false} />
      </Canvas>

    </section>
  );
};

export default ProductViewer;
