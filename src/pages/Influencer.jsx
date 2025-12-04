import React from "react";
import ProductViewer from "../componentes/ProductViewer";
import { Link } from "react-router-dom";

const Influencer = () => {
  return (
    <main className="min-h-screen w-full bg-neutral-950 text-white flex flex-col items-center pt-24 pb-32 px-6">

      <section className="w-full max-w-4xl mb-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Influencers</h2>
        <p className="opacity-80 mb-6">
          Contenido dedicado para creadores, marcas personales y nuevos talentos digitales.
        </p>

        <div className="w-full aspect-video bg-neutral-800 rounded-xl overflow-hidden flex items-center justify-center">
          <video 
                className='w-5xl'
                src="./videos/influ1.mp4"
                loop
                muted
                playsInline
                autoPlay
              ></video>
        </div>
      </section>

      <section className="w-full max-w-3xl mb-20 text-center">
        <h3 className="text-2xl font-semibold mb-4">Consejos para influencers</h3>
        <p className="opacity-70 leading-relaxed mb-4">
          Mantén tu identidad, comunica con propósito y sé constante. Las marcas buscan autenticidad,
          compromiso real y una comunidad que confíe en tu voz.
        </p>
        <p className="opacity-70">
          En Byjen te acompañamos en cada paso para potenciar tu presencia digital y ayudarte a crecer.
        </p>
      </section>

      <ProductViewer />

      <section className="mt-16 text-center">
        <p className="opacity-80 mb-4">
          Para una asesoría más personalizada y cercana, haz clic aquí:
        </p>
        <Link
          to="/contact"
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-lg font-semibold"
        >
          Contactar equipo Byjen
        </Link>
      </section>

    </main>
  );
};

export default Influencer;
