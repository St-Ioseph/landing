import { useState } from "react";
import { motion } from "framer-motion";
import { InvitationModal } from "./InvitationModal";
import dashboard from "../assets/images/dashboard.png";
import WspButton from "./shared/wsp";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="flex justify-center items-center bg-bgDark1 hero-bg-gradient w-screen max-lg:pb-[12vw]"
      id="home"
    >
      <div className="flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 w-full md:w-[800px] xl:w-[900px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mt-14 sm:mt-20 mb-6 font-normal text-secondaryColor md:text-md text-xs sm:text-sm lg:text-lg xl:text-xl">
          Empresa de Desarrollo de Software. Mendoza, Argentina
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <h2 className="px-8 sm:px-8 md:px-20 lg:px-4 font-medium text-primaryText text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-relaxed tracking-wide line">
            Somos el brazo tecnológico que tu empresa necesita
          </h2>
          <h2 className="mt-2 sm:mt-2 px-8 sm:px-20 md:px-24 lg:px-24 font-medium text-primaryText text-2xl xl:text-4xl sm:text-5xl lg:text-6xl tracking-wide">
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex sm:flex-row flex-col justify-center gap-2 mt-8 mb-12">
            <button
              className="mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0 w-64 sm:w-52 h-12 contained-button"
            >
              <a className="text-bgDark2" href="/#features">¿Qué hacemos?</a>
            </button>
            <button
              className="flex justify-center items-center bg-bgDark2 hover:bg-bgDark3 border border-primaryColor border-solid rounded-xl w-64 sm:w-52 h-12 font-medium text-primaryText transition cursor-pointer"
              onClick={() => setIsModalOpen(true)}
              aria-label="Correo"
            >
              Dejanos tu correo
            </button>
            {/* <WspButton/> */}
          </div>
        </motion.div>
        <div className="relative flex justify-center w-screen">
          <div className="hidden lg:block shape-divider-bottom-1665343298 mt-4">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="bg-bgDark2"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className="bg-bgDark1 fill-bgDark1 shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
