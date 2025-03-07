import { motion } from "framer-motion";

import { TSLogo } from "../assets/logos/TSLogo";
import { ViteLogo } from "../assets/logos/ViteLogo";
import { NextLogo } from "../assets/logos/NextLogo";
import { PythonLogo } from "../assets/logos/PythonLogo";
import { DjangoLogo } from "../assets/logos/DjangoLogo";
import { ReactLogo } from "../assets/logos/ReactLogo";

export const Brands = () => (
  <section className="bg-bgDark1 lg:mt-16 mb-8 lg:mb-16 py-12 sm:py-24 w-full">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="mx-auto px-4 md:w-4/5 lg:w-[1000px] 2xl:w-[1200px] xl:w-[1100px] container">
        <div className="flex lg:flex-row flex-col justify-center items-center -mx-4 lg:text-left text-center">
          <div className="mb-12 lg:mb-0 px-4 w-full lg:w-1/2">
            <div className="flex flex-col">
              <h2 className="mb-2 font-bold text-primaryText text-4xl sm:text-5xl 2xl:text-6xl tracking-normal">
                Nuestras
              </h2>
              <h2 className="font-bold text-secondaryColor text-4xl sm:text-5xl 2xl:text-6xl tracking-normal">
                tecnologías
              </h2>
            </div>
          </div>
          <div className="mx-auto lg:mx-0 lg:pl-10 w-2/3 sm:w-[620px] lg:w-1/2">
            <div className="flex flex-wrap -m-4">
              <div className="flex justify-center py-6 w-1/2 sm:w-1/3">
                <TSLogo />
              </div>
              <div className="flex justify-center py-6 w-1/2 sm:w-1/3">
                <ViteLogo />
              </div>
              <div className="flex justify-center py-6 w-1/2 sm:w-1/3">
                <NextLogo />
              </div>
              <div className="flex justify-center py-6 w-1/2 sm:w-1/3">
                <ReactLogo />
              </div>

              <div className="flex justify-center py-6 w-1/2 sm:w-1/3">
                <DjangoLogo />
              </div>
              <div className="flex justify-center py-6 w-1/2 sm:w-1/3">
                <PythonLogo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
