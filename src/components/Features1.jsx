import { motion } from "framer-motion";

import feature1 from "../assets/images/feature1.webp";
import feature2 from "../assets/images/feature2.jpg";
import feature3 from "../assets/images/feature3.jpg";
import feature4 from "../assets/images/feature4.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section
      className="bg-bgDark2 -mt-8 sm:-mt-8 xl:-mt-8 2xl:mt-0 mb-8 sm:mb-24 pt-24 md:pt-[12vw] lg:pt-16 w-full"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center mx-auto xl:pr-16 md:pl-4 xl:pl-16 w-11/12 2xl:w-[1450px] xl:w-[1300px]">
          <div className="mb-12 lg:mb-0 w-full lg:w-1/2">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="block-subtitle">
                Soluciones web innovadoras para tu empresa
              </span>
              <h2 className="block-big-title mt-6 mb-8 text-4xl lg:text-5xl">
                Impulsamos tu negocio con tecnología a medida
              </h2>
              <p className="mb-10 text-secondaryText leading-loose">
                Desarrollamos sistemas de gestión y plataformas web
                personalizadas con analíticas avanzadas para optimizar tus
                operaciones.
              </p>
              <ul className="mb-6 text-primaryText">
                <li className="flex mb-4">
                  <CheckArrowIcon />
                  <span>Paneles de control intuitivos y dinámicos.</span>
                </li>
                <li className="flex mb-4">
                  <CheckArrowIcon />
                  <span>Reportes y analíticas personalizadas.</span>
                </li>
                <li className="flex mb-4">
                  <CheckArrowIcon />
                  <span>Automatización y optimización de procesos.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap justify-center mx-auto lg:-mx-4 xl:px-8 lg:pt-10 sm:pr-8 lg:pl-4 w-3/4 lg:w-1/2">
            <div className="mb-8 lg:mb-0 px-2 lg:px-0 w-full sm:w-1/2">
              <div className="mb-4 py-3 pr-2 pl-3 rounded">
                <img
                  src={feature1.src}
                  alt="Imagen de característica 1"
                  className="mx-auto sm:mx-unset main-border-gray rounded-xl"
                  aria-label="Imagen de característica 1"
                />
              </div>
              <div className="py-3 pr-2 pl-3 rounded">
                <img
                  src={feature2.src}
                  alt="Imagen de característica 2"
                  className="mx-auto sm:mx-unset main-border-gray rounded-xl"
                  aria-label="Imagen de característica 2"
                />
              </div>
            </div>
            <div className="hidden sm:inline-block lg:mt-20 px-2 pt-12 lg:pt-0 w-1/2">
              <div className="mb-4 py-3 pr-2 pl-3 rounded-lg">
                <img
                  src={feature3.src}
                  alt="Imagen de característica 3"
                  className="main-border-gray rounded-xl"
                  aria-label="Imagen de característica 3"
                />
              </div>
              <div className="py-3 pr-2 pl-3 rounded-lg">
                <img
                  src={feature4.src}
                  alt="Imagen de característica 4"
                  className="main-border-gray rounded-xl"
                  aria-label="Imagen de característica 4"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
