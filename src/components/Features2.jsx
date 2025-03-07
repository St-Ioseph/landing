import { motion } from "framer-motion";

import feature5 from "../assets/images/feature5.jpg";
import feature6 from "../assets/images/feature6.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features2 = () => (
  <section className="bg-bgDark2 lg:my-20 mt-12 sm:mt-24 mb-12 lg:mb-24 pt-4 w-full">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-wrap items-center mx-auto xl:pr-16 md:pl-4 xl:pl-16 w-11/12 2xl:w-[1450px] xl:w-[1300px]">
        <div className="flex flex-wrap justify-center order-last lg:order-first mx-auto lg:-mx-4 sm:pr-8 w-11/12 sm:w-3/4 lg:w-1/2">
          <div className="flex flex-col justify-center mb-8 lg:mb-0 px-2 md:pl-8 lg:pl-16 w-full">
            <div className="mb-4 py-3 md:pr-20 lg:pr-12 md:pl-3 rounded">
              <img
                src={feature5.src}
                alt="Imagen de característica 5"
                className="main-border-gray rounded-xl"
              />
            </div>
            <div className="py-3 md:pr-2 md:pl-20 lg:pl-12 rounded">
              <img
                src={feature6.src}
                alt="Imagen de característica 6"
                className="main-border-gray rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className="mb-12 lg:mb-0 xl:pl-8 w-full lg:w-1/2">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset text-end">
            <span className="block-subtitle">
              Convertí tus datos en información accesible para hacer crecer tu
              negocio
            </span>
            <h2 className="block-big-title mt-6 mb-8 text-4xl lg:text-5xl text-end">
              Te ayudamos a tomar decisiones con información precisa
            </h2>
            <p className="mb-12 text-secondaryText text-end leading-loose">
              Accede a datos clave en tiempo real con nuestros sistemas de
              gestión y analíticas avanzadas. Optimizá tu operación y mejora tu
              toma de decisiones con herramientas intuitivas.
            </p>
            <ul className="flex flex-col justify-end mb-6 text-primaryText">
              <li className="flex flex-row justify-end gap-4 mb-4">
                <span>Gráficas y análisis de datos.</span>
                <CheckArrowIcon />
              </li>
              <li className="flex flex-row justify-end gap-4 mb-4">
                <span>Controles detallados y personalizables.</span>
                <CheckArrowIcon />
              </li>
              <li className="flex flex-row justify-end gap-4 mb-4">
                <span>Alertas y notificaciones en tiempo real.</span>
                <CheckArrowIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
