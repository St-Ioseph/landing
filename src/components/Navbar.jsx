import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InvitationModal } from "./InvitationModal";
import { IosephLogo } from "../assets/logos/IosephLogo";
import { WspIcon } from "../assets/icons/WspIcon";

const navItemClassName =
  "text-white lg:text-base text-2xl  leading-6 mr-4 ml-4 2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition h-full pt-2";
const navbarLinks = [
  {
    label: "¿Qué hacemos?",
    href: "/#features",
    ariaLabel: "Características",
  },
  // { label: "Precios", href: "/#pricing", ariaLabel: "Precios" },
  // { label: "Comentarios", href: "/#feedback", ariaLabel: "Comentarios" },
  // { label: "FAQ", href: "/#FAQ", ariaLabel: "FAQ" },
];
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav
        className="bg-bgDark1 w-full h-20 fixed z-40 flex flex-col justify-center items-center lg:bg-bgDarkTransparent lg:backdrop-blur-xl"
        aria-label="Navegación principal"
      >
        <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <a href="/#home" aria-label="Inicio">
              <div className="flex basis-0 grow justify-start items-center">
                <div className="mr-2 text-6xl text-white">
                  <IosephLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  Ioseph
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div className="h-full hidden pb-2 pl-12 lg:flex">
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
            <div className="hidden basis-0 grow justify-end lg:flex">
              <a
                className="main-border-gray flex pt-2 pr-8 pb-2 pl-6 text-sm text-white bg-green-600 rounded-xl hover:bg-bgDark3"
                href="https://wa.me/+5492613337751?text=Hola, mi nombre es "
                target="_blank"
                aria-label="numero telefónico"
              >
                <WspIcon />
                <span className="pt-px">Hablemos...</span>
              </a>
            </div>
          </motion.div>
          <div
            className="flex flex-col px-2 py-3 rounded-md border border-gray-600 border-solid cursor-pointer hover:bg-bgDark2 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-500 "></div>
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
                className="bg-bgDark1 border-bgDark3 w-full absolute left-0 top-4 z-50 flex flex-col items-center gap-10 pt-10 pb-10 mt-16 border-y border-solid lg:hidden"
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
                  className="outlined-button flex pt-2 pr-8 pb-2 pl-6"
                  href="https://wa.me/+5492613337751?text=Hola, me gustaría que agendáramos una reunión, mi nombre es ."
                  target="_blank"
                >
                  <WspIcon />
                  WhatsApp
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
