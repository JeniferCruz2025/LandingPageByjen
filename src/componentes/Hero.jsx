import React, { useEffect, useRef, useState } from 'react'
import BlurText from './BlurText'

const Hero = () => {
  const videoRef = useRef(null)
  const [showTitle] = useState(true)

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2
  }, [])

  return (
    <section
      id="hero"
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 text-center gap-6"
    >
      
      {showTitle && (
        <div className="flex flex-col items-center gap-4">
          <BlurText
            text="Byjen"
            delay={200}
            animateBy="letters"
            direction="top"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
          />

          <video
            src="./videos/title.mp4"
            loop
            muted
            playsInline
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      )}

      <div className="w-full flex justify-center overflow-hidden">
        <video
          ref={videoRef}
          src="/videos/teste.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="
            w-full 
            max-w-md 
            sm:max-w-lg 
            md:max-w-xl 
            lg:max-w-2xl 
            rounded-xl
          "
        />
      </div>

      <a
        href="https://wa.me/56938946998"
        target="_blank"
        rel="noopener noreferrer"
        className="
          px-6 py-3 
          bg-purple-500 
          text-white 
          rounded-xl 
          hover:bg-purple-600 
          transition-all
          text-sm sm:text-base
          mt-10
        "
      >
        Contacto
      </a>

      <p className="text-sm sm:text-base opacity-80">
        Múltiples resultados para diferentes estrategias
      </p>
    </section>
  )
}

export default Hero
