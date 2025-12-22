import React, { useState, useRef } from "react";
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import EarthCanvas from '../componentes/canvas/EarthCanvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from "../utils/motion";
import StarsCanvas from "../componentes/canvas/Stars";

const countryCodes = [
  { code: "+55", country: "Brasil" },
  { code: "+56", country: "Chile" },
  { code: "+54", country: "Argentina" },
  { code: "+51", country: "Perú" },
  { code: "+57", country: "Colombia" },
  { code: "+52", country: "México" },
];

const servicios = [
  "Gestión de Redes Sociales",
  "Publicidad Digital (Ads)",
  "SEO (Posicionamiento Orgánico)",
  "Marketing de Contenidos",
  "Email Marketing y Automatización",
  "Influencer Marketing",
  "Personalizado"
];

const Contacto = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    phonePrefix: '+55',
    nationality: '',
    company: '',
    servicio: '',
  });

  const [loading, setLoading] = useState(false);

  const formatPhone = (value) => {
    let numbers = value.replace(/\D/g, '').slice(0, 11);
    let formatted = numbers;

    if (numbers.length > 2) {
      formatted = `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    }
    if (numbers.length > 7) {
      formatted = `(${numbers.slice(0, 2)}) ${numbers.slice(2, 3)} ${numbers.slice(3, 7)}-${numbers.slice(7)}`;
    }

    return formatted;
  };

  const handlePhoneChange = (e) => {
    setForm({ ...form, phone: formatPhone(e.target.value) });
  };

  const handlePrefixChange = (e) => {
    const prefix = e.target.value;
    const current = form.phone.replace(/\D/g, '');
    setForm({ ...form, phonePrefix: prefix, phone: formatPhone(current) });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleServicioChange = (e) => {
    const value = e.target.value;
    setForm({ ...form, servicio: value });

    if (value === "Personalizado") {
      window.open(
        "https://docs.google.com/forms/d/1sh_BJw0JrMse6kKrYR4GeHMjURgBRxskAkjwqtSksik/edit",
        "_blank"
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_xlbcvrx',
      'template_ila05mr',
      {
        from_name: form.name,
        to_name: 'byjen',
        from_email: form.email,
        to_email: 'byjen.contact@gmail.com',
        phone: `${form.phonePrefix} ${form.phone}`,
        nationality: form.nationality,
        company: form.company,
        servicio: form.servicio,
        message: form.message,
      },
      'vQkqsA00LEwNSBdvr'
    ).then(() => {
      setLoading(false);
      alert('Gracias por enviar un correo electrónico, regresaremos el mayor tiempo posible.');

      setForm({
        name: '',
        email: '',
        message: '',
        phone: '',
        phonePrefix: '+55',
        nationality: '',
        company: '',
        servicio: '',
      });
    }).catch(() => {
      setLoading(false);
      alert('Algo deu errado');
    });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">

      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Ponte en contacto</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">

          {/** INPUT PADRÃO */}
          {[
            { label: "Nombre", name: "name", placeholder: "Nombre completo:" },
            { label: "Email", name: "email", placeholder: "Correo electrónico:", type: "email" },
            { label: "Nacionalidad", name: "nationality", placeholder: "Ej: Chileno, Brasileño..." },
            { label: "Empresa / Marca", name: "company", placeholder: "Tu empresa o marca" }
          ].map(({ label, name, placeholder, type = "text" }) => (
            <label key={name} className="flex flex-col">
              <span className="text-white font-medium mb-4">{label}</span>
              <input
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="bg-[#d4a017] text-black placeholder:text-black/60 py-4 px-6 rounded-lg outline-none font-medium focus:ring-2 focus:ring-black/40"
              />
            </label>
          ))}

          {/** TELEFONE */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Teléfono</span>
            <div className="flex flex-col sm:flex-row gap-3">
              <select
                value={form.phonePrefix}
                onChange={handlePrefixChange}
                className="bg-[#d4a017] text-black py-4 px-4 rounded-lg focus:ring-2 focus:ring-black/40"
              >
                {countryCodes.map(c => (
                  <option key={c.code} value={c.code}>
                    {c.country} ({c.code})
                  </option>
                ))}
              </select>

              <input
                type="text"
                value={form.phone}
                onChange={handlePhoneChange}
                placeholder="(DDD) 9 9999-9999"
                className="flex-1 bg-[#d4a017] text-black placeholder:text-black/60 py-4 px-6 rounded-lg outline-none font-medium focus:ring-2 focus:ring-black/40"
              />
            </div>
          </label>

          {/** SERVIÇOS */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Nuestros servicios</span>
            <select
              value={form.servicio}
              onChange={handleServicioChange}
              className="bg-[#d4a017] text-black py-4 px-4 rounded-lg focus:ring-2 focus:ring-black/40"
            >
              <option value="">Selecciona tu servicio</option>
              {servicios.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </label>

          {/** MENSAGEM */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Mensaje</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Mensaje:"
              className="bg-[#d4a017] text-black placeholder:text-black/60 py-4 px-6 rounded-lg outline-none font-medium focus:ring-2 focus:ring-black/40"
            />
          </label>

          {/** BOTÃO */}
          <button
            type="submit"
            className="bg-[#15102e] py-3 px-8 outline-none w-fit text-white 
                       font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>

        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
        <StarsCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contacto, "contacto");
