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
    <section className="w-screen flex justify-center bg-bgDark2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-bgDark2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="block-subtitle">Encuentra Tu Ajuste Perfecto</span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-primaryText">
                Elige tu mejor plan
              </h2>
              <p className="mb-6 text-secondaryText">
                Selecciona el plan que se adapte a tus necesidades y benefíciate de nuestras herramientas de análisis.
              </p>
              <label className="mx-auto bg-bgDark3 relative flex justify-between items-center group text-xl w-44 h-12 rounded-lg pr-36 pl-1 cursor-pointer">
                <input
                  type="checkbox"
                  className="peer appearance-none"
                  checked={!isMonthly}
                  onChange={handleChange}
                />
                <span className="h-8 w-[5.5rem] flex items-center pr-2 bg-bgDark3 after:rounded-lg duration-300 ease-in-out  after:w-[30rem] after:h-10  after:bg-primaryColor   after:shadow-md after:duration-300 peer-checked:after:translate-x-[5.5rem] cursor-pointer"></span>
                <div className="flex absolute text-primaryText text-sm font-bold">
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
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20">
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-bgDark3 rounded-3xl">
                  <h3 className="mb-2 text-xl font-bold font-heading text-primaryText text-left">
                    Principiante
                  </h3>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-primaryText text-left mt-4 mr-2">
                      $0
                    </div>
                    <div className="text-gray-500">
                      {isMonthly ? "/ mes" : "/ año"}
                    </div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    La forma perfecta de empezar y familiarizarte con nuestras herramientas.
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-primaryText">
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl contained-button font-bold leading-loose mt-16"
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Comienza"
                  >
                    Comienza
                  </button>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="px-8 py-8 bg-bgDark3 rounded-3xl">
                  <h3 className="mb-2 2xl:mb-4 text-2xl font-bold font-heading text-primaryText text-left">
                    Estándar
                  </h3>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-primaryText text-left mt-4 mr-2">
                      {isMonthly ? "$19" : "$180"}
                    </div>
                    <div className="text-gray-500">
                      {isMonthly ? "/ mes" : "/ año"}
                    </div>
                  </div>
                  <p className="mt-8 mb-8 2xl:mb-12 text-gray-500 leading-loose text-left">
                    Desbloquea más características y eleva tu análisis de datos.
                  </p>
                  <ul className="mb-14 text-primaryText">
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="inline-block text-center py-2 px-4 w-full contained-button leading-loose transition duration-200 mt-20"
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Comienza"
                  >
                    Comienza
                  </button>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-bgDark3 rounded-3xl">
                  <h3 className="mb-2 text-xl font-bold font-heading text-primaryText text-left">
                    Premium
                  </h3>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-primaryText text-left mt-4 mr-2">
                      {isMonthly ? "$36" : "$390"}
                    </div>
                    <div className="text-gray-500">
                      {isMonthly ? "/ mes" : "/ año"}
                    </div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    Experimenta el poder total de nuestra plataforma de análisis
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-primaryText">
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl contained-button font-bold leading-loose mt-16"
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
