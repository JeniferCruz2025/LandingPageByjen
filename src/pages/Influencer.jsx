import React from "react";
import { Link } from "react-router-dom";

const influencerVideos = [
  { id: 1, src: "/v1.mp4" },
  { id: 2, src: "/v2.mp4" },
  { id: 3, src: "/v3.mp4" },
  { id: 4, src: "/v4.mp4" },
  { id: 5, src: "/v5.mp4" },
  { id: 6, src: "/v6.mp4" },
  { id: 7, src: "/v7.mp4" },
  { id: 8, src: "/v8.mp4"},
];

const Influencer = () => {
  return (
    <main className="min-h-screen w-full bg-neutral-950 text-white flex flex-col items-center pt-24 pb-32 px-6">
      
      <section className="w-full max-w-4xl mb-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Influencers</h2>

        <p className="opacity-80 mb-10">
          Contenido dedicado para creadores, marcas personales y nuevos talentos digitales.
        </p>

        {/* GRID DE VÍDEOS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {influencerVideos.map((video) => (
            <div
              key={video.id}
              className="
                aspect-square
                bg-neutral-800
                rounded-xl
                overflow-hidden
                hover:scale-[1.03]
                transition-transform
              "
            >
              <video
                src={video.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-3xl text-center">
        <h3 className="text-2xl font-semibold mb-4">
          Consejos para influencers
        </h3>

        <p className="opacity-70 leading-relaxed mb-4">
          Mantén tu identidad, comunica con propósito y sé constante. Las marcas buscan autenticidad,
          compromiso real y una comunidad que confíe en tu voz.
        </p>

        <p className="opacity-70">
          En Byjen te acompañamos en cada paso para potenciar tu presencia digital y ayudarte a crecer.
        </p>
      </section>

      <section className="mt-16 text-center">
        <p className="opacity-80 mb-4">
          Para una asesoría más personalizada y cercana, haz clic aquí:
        </p>

        <Link
          to="/contact"
          className="
            px-5 py-2
            sm:px-6 sm:py-3
            bg-[#f6a700]
            text-black
            rounded-xl
            transition-all
            shadow-[0_0_12px_rgba(246,167,0,0.7)]
            hover:shadow-[0_0_20px_rgba(246,167,0,0.95)]
            hover:scale-[1.03]
          "
        >
          Regístrate
        </Link>
      </section>

    </main>
  );
};

export default Influencer;
