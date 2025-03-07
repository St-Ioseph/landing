import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InvitationModal } from "./InvitationModal";
import { WspIcon } from "../assets/icons/WspIcon";
import WspButton from "./shared/wsp";
import IosephLogoTitle from "./shared/ioseph";

const navItemClassName =
  "text-white lg:text-lg text-2xl  leading-6 mr-4 ml-4 2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition h-full pt-2";
const navbarLinks = [
  {
    label: "¿Qué hacemos?",
    href: "/#features",
    ariaLabel: "Características",
  }
];
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav
        className="z-40 fixed flex flex-col justify-center items-center bg-bgDark1 lg:bg-bgDarkTransparent lg:backdrop-blur-xl w-full h-20"
        aria-label="Navegación principal"
      >
        <div className="relative flex justify-between items-center w-11/12 2xl:w-[1280px] xl:w-10/12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <a href="/#home" aria-label="Inicio">
              <IosephLogoTitle />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div className="hidden lg:flex pb-2 pl-12 h-full">
              {navbarLinks.map(({ href, label, ariaLabel }) => (
                <a
                  className={navItemClassName}
                  href={href}
                  aria-label={ariaLabel}
                  key={label}
                >
                  {label}
                </a>
              ))}
              <button
                className={navItemClassName}
                onClick={() => setIsModalOpen(true)}
              >
                Contacto
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div className="hidden lg:flex justify-center items-center basis-0 grow">
              <WspButton />
            </div>
          </motion.div>
          <div
            className="lg:hidden flex flex-col hover:bg-bgDark2 px-2 py-3 border border-gray-600 border-solid rounded-md cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bg-gray-500 mb-1 w-5 h-0.5"></div>
            <div className="bg-gray-500 mb-1 w-5 h-0.5"></div>
            <div className="bg-gray-500 w-5 h-0.5"></div>
          </div>
        </div>
        {/* MOBILE NAVBAR */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="lg:hidden top-4 left-0 z-50 absolute flex flex-col items-center gap-10 bg-bgDark1 mt-16 pt-10 pb-10 border-y border-bgDark3 border-solid w-full"
              >
                {navbarLinks.map(({ label, href, ariaLabel }) => (
                  <a
                    key={href}
                    className={navItemClassName}
                    href={href}
                    aria-label={ariaLabel}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </a>
                ))}
                <button
                  className={navItemClassName}
                  onClick={() => setIsModalOpen(true)}
                >
                  Contacto
                </button>
                <a
                  className="flex justify-center items-center pt-2 pr-8 pb-2 pl-6 outlined-button"
                  href="https://wa.me/+5492613337751?text=Hola, me gustaría que agendáramos una reunión, mi nombre es ."
                  target="_blank"
                >
                <WspIcon />
                <span className="pt-px">Hablemos</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </>
  );
};
