import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

const pricingData = [
  "Integración perfecta",
  "Visualización de datos en tiempo real",
  "Análisis predictivo avanzado",
  "Entorno colaborativo",
  "Soporte al cliente receptivo",
];

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <section className="relative flex justify-center bg-bgDark2 w-screen">
      <div className="-top-16 absolute" id="pricing" />
      <div className="bg-bgDark2 pt-12 pb-20 md:w-4/5 lg:w-[1050px] 2xl:w-[1150px]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mx-auto px-4 container">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <span className="block-subtitle">Encuentra Tu Ajuste Perfecto</span>
              <h2 className="mt-6 mb-6 font-heading font-bold text-primaryText text-4xl lg:text-5xl">
                Elige tu mejor plan
              </h2>
              <p className="mb-6 text-secondaryText">
                Selecciona el plan que se adapte a tus necesidades y benefíciate de nuestras herramientas de análisis.
              </p>
              <label className="group relative flex justify-between items-center bg-bgDark3 mx-auto pr-36 pl-1 rounded-lg w-44 h-12 text-xl cursor-pointer">
                <input
                  type="checkbox"
                  className="peer appearance-none"
                  checked={!isMonthly}
                  onChange={handleChange}
                />
                <span className="flex items-center bg-bgDark3 after:bg-primaryColor after:shadow-md pr-2 after:rounded-lg w-[5.5rem] after:w-[30rem] h-8 after:h-10 peer-checked:after:translate-x-[5.5rem] duration-300 after:duration-300 ease-in-out cursor-pointer"></span>
                <div className="absolute flex font-bold text-primaryText text-sm">
                  <div
                    className={
                      isMonthly ? "mr-9 ml-3" : "mr-9 ml-3 text-gray-400"
                    }
                  >
                    Mensual
                  </div>
                  <div className={isMonthly ? "text-gray-400" : ""}>Anual</div>
                </div>
              </label>
            </div>
            <div className="flex lg:flex-row flex-col flex-wrap items-center -mx-4 mt-20">
              <div className="mb-8 lg:mb-0 px-4 w-[350px] sm:w-[380px] lg:w-1/3">
                <div className="bg-bgDark3 p-8 rounded-3xl">
                  <h3 className="mb-2 font-heading font-bold text-primaryText text-xl text-left">
                    Principiante
                  </h3>
                  <div className="flex justify-start items-end">
                    <div className="mt-4 mr-2 font-bold text-primaryText text-4xl sm:text-5xl text-left">
                      $0
                    </div>
                    <div className="text-gray-500">
                      {isMonthly ? "/ mes" : "/ año"}
                    </div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 text-left leading-loose">
                    La forma perfecta de empezar y familiarizarte con nuestras herramientas.
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-primaryText">
                    {pricingData.map((text, index) => (
                      <li className="flex mb-4" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="inline-block mt-16 px-4 py-2 rounded-xl rounded-t-xl w-full font-bold text-center leading-loose contained-button"
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Comienza"
                  >
                    Comienza
                  </button>
                </div>
              </div>
              <div className="mb-8 lg:mb-0 px-4 w-[350px] sm:w-[380px] lg:w-1/3">
                <div className="bg-bgDark3 px-8 py-8 rounded-3xl">
                  <h3 className="mb-2 2xl:mb-4 font-heading font-bold text-primaryText text-2xl text-left">
                    Estándar
                  </h3>
                  <div className="flex justify-start items-end">
                    <div className="mt-4 mr-2 font-bold text-primaryText text-4xl sm:text-5xl text-left">
                      {isMonthly ? "$19" : "$180"}
                    </div>
                    <div className="text-gray-500">
                      {isMonthly ? "/ mes" : "/ año"}
                    </div>
                  </div>
                  <p className="mt-8 mb-8 2xl:mb-12 text-gray-500 text-left leading-loose">
                    Desbloquea más características y eleva tu análisis de datos.
                  </p>
                  <ul className="mb-14 text-primaryText">
                    {pricingData.map((text, index) => (
                      <li className="flex mb-4" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="inline-block mt-20 px-4 py-2 w-full text-center leading-loose transition duration-200 contained-button"
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Comienza"
                  >
                    Comienza
                  </button>
                </div>
              </div>
              <div className="mb-8 lg:mb-0 px-4 w-[350px] sm:w-[380px] lg:w-1/3">
                <div className="bg-bgDark3 p-8 rounded-3xl">
                  <h3 className="mb-2 font-heading font-bold text-primaryText text-xl text-left">
                    Premium
                  </h3>
                  <div className="flex justify-start items-end">
                    <div className="mt-4 mr-2 font-bold text-primaryText text-4xl sm:text-5xl text-left">
                      {isMonthly ? "$36" : "$390"}
                    </div>
                    <div className="text-gray-500">
                      {isMonthly ? "/ mes" : "/ año"}
                    </div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 text-left leading-loose">
                    Experimenta el poder total de nuestra plataforma de análisis
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-primaryText">
                    {pricingData.map((text, index) => (
                      <li className="flex mb-4" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="inline-block mt-16 px-4 py-2 rounded-xl rounded-t-xl w-full font-bold text-center leading-loose contained-button"
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Comienza"
                  >
                    Comienza
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
