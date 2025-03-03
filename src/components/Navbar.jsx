import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InvitationModal } from "./InvitationModal";
import { IosephLogo } from "../assets/logos/IosephLogo";
import { WspIcon } from "../assets/icons/WspIcon";

const navItemClassName =
  "text-white lg:text-base text-2xl  leading-6 mr-4 ml-4 2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition h-full pt-2";
const navbarLinks = [
  {
    label: "Inicio",
    href: "/#home",
    ariaLabel: "Inicio",
  },
  {
    label: "Características",
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
        className="w-full h-20 flex flex-col justify-center items-center fixed bg-bgDark1 lg:bg-bgDarkTransparent z-40 lg:backdrop-blur-xl"
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
              <div className="flex justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
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
            <div className="hidden lg:flex h-full pl-12 pb-2">
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
            <div className="grow basis-0 justify-end hidden lg:flex">
              <a
                className="text-white main-border-gray rounded-xl
           bg-bgDark2 hover:bg-bgDark3  border-gray-700 pl-6 pr-8 pt-2 pb-2 text-sm flex"
                href="https://wa.me/+5492613337751?text=Hola, me gustaría que agendáramos una reunión, mi nombre es ."
                target="_blank"
                aria-label="numero telefónico"
              >
                <WspIcon />
                <span className="pt-px">WhatsApp</span>
              </a>
            </div>
          </motion.div>
          <div
            className="lg:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-bgDark2"
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
                className="flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-bgDark1 z-50 w-full 
        items-center gap-10 pb-10 border-y border-solid border-bgDark3 pt-10
        "
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
                  className="outlined-button pl-6 pr-8 pt-2 pb-2  flex"
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
