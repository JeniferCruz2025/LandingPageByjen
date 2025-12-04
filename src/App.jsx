import { useState } from "react"
import NavBar from "../src/componentes/NavBar"
import Footer from "./componentes/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home"
import Influencer from "../src/pages/Influencer"
import Contact from "../src/pages/Contact"
import Empresa from "./pages/Empresa";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Privacidade from "./pages/Privacidade";
import TermosDeUso from "./pages/TermosDeUso";
import Cookies from "./pages/Cookies";

gsap.registerPlugin(ScrollTrigger)

function App(){

  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);

  const values={setIsHeaderFooterShow,isHeaderFooterShow}

   return (
    <BrowserRouter>
    {
      isHeaderFooterShow === true && <NavBar />
    }
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/influencer" element={<Influencer />} />
            <Route path="/empresa" element={<Empresa />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/termosdeuso" element={<TermosDeUso />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
          {
            isHeaderFooterShow === true && <Footer />
          }
    </BrowserRouter>
  
  )
}

export default App
