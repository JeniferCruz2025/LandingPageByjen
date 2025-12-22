import React from "react";
import Hero from "../componentes/Hero";
import { Link } from "react-router-dom";
import SobreNos from "../componentes/SobreNos";
import Showcase from "../componentes/Showcase";
import Cards from "../componentes/Cards"
import Tech from "../componentes/Tech";

const Home = () => {
    return (
        <main className="w-full bg-black text-white flex flex-col items-center justify-center overflow-hidden">
            <Hero />
            
            <SobreNos />
           
            <section>
                <Cards />
            </section>

            <Tech/>

        </main>
    )
}

export default Home;