import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { CloseIcon } from "../assets/icons/CloseIcon";
import { IosephLogo } from "../assets/logos/IosephLogo";
import { useForm } from "react-hook-form";

export const InvitationModal = ({ setIsOpen }) => {
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
  const [isFormLocked, setIsFormLocked] = useState(false);
  const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const handleClose = () => {
    setSubmitStatus({ success: false, message: '' });
    setIsFormLocked(false);
    setIsOpen(false);
    reset();
  };

  const onSubmit = async (data) => {
    try {
      setSubmitStatus({ success: false, message: '' });
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      
      if (!response.ok) {
        throw new Error(responseData.error || 'Error al enviar el correo');
      }
      
      if (responseData.success) {
        setSubmitStatus({ success: true, message: 'Correo enviado exitosamente' });
        setIsFormLocked(true);
        reset();
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: error.message });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, zIndex: 50 }}
        animate={{ opacity: 1, zIndex: 50 }}
        transition={{ duration: 0.1 }}
        exit={{ opacity: 0 }}
      >
        <div
          className="top-0 left-0 z-50 fixed flex justify-center items-center bg-bgDarkTransparentDarker w-full h-full"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="z-50 fixed bg-bgDarkTransparentLighter backdrop-blur-xl mx-auto sm:mb-8 px-8 sm:px-16 py-1 sm:py-2 md:py-8 lg:py-12 main-border-gray-darker sm:rounded-2xl w-full sm:w-3/4 md:w-3/5 lg:w-[1000px] xl:w-[1100px] h-screen sm:h-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex">
              <div className="hidden lg:inline w-1/2">
                <h2 className="mt-6 mb-2 font-bold text-primaryText text-5xl tracking-normal">
                  Comparte tu correo
                </h2>
                <h2 className="font-bold text-secondaryColor text-5xl tracking-normal">
                  Nosotros te contactaremos
                </h2>

                <ul className="mt-12 mb-6 text-primaryText">
                  <li className="flex mb-4">
                    <CheckArrowIcon />
                    <span>Solución tecnológica a medida</span>
                  </li>
                  <li className="flex mb-4">
                    <CheckArrowIcon />
                    <span>Planificación precisa de entregas</span>
                  </li>
                  <li className="flex mb-4">
                    <CheckArrowIcon />
                    <span>Mantenimiento y calidad asegurada</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center items-center pt-24 sm:pt-0 w-full lg:w-1/2">
                <div className="lg:hidden flex justify-start items-center mb-8 pr-6 grow basis-0">
                
                  <div className="mr-2 text-white text-8xl">
                    <IosephLogo />
                  </div>
                  <div className="font-medium 
                   text-white text-3xl">
                    Ioseph
                  </div>
                </div>

                <h3 className="mb-7 font-medium text-primaryText text-2xl text-center leading-snug">
                  Impulsá tus ingresos
                </h3>
                <h4 className="mb-12 font-normal text-secondaryColor text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">
                  Envía tu correo y nosotros te contactamos
                </h4> 
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={`flex flex-wrap -m-2 w-full ${isFormLocked ? 'pointer-events-none opacity-50' : ''}`}
                >
                  <div className="mx-auto p-2 w-full sm:w-4/5">
                    <input
                      className="bg-gray-300 px-4 py-4 border border-gray-300 rounded-lg outline-none focus:ring focus:ring-yellow-100 w-full font-medium text-black  text-center placeholder-gray-500"
                      {...register("name", { required: true })}
                      type="text"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div className="mx-auto p-2 w-full sm:w-4/5">
                    <input
                      className="bg-gray-300 px-4 py-4 border border-gray-300 rounded-lg outline-none focus:ring focus:ring-yellow-100 w-full font-medium text-black text-center placeholder-gray-500"
                      {...register("email", { required: true })}
                      type="email"
                      placeholder="Tu dirección de correo electrónico"
                      required
                    />
                  </div>
                  <div className="mx-auto mt-4 p-2 w-full sm:w-4/5">
                    <button
                      className="bg-primaryColor hover:bg-hoverColor disabled:opacity-50 shadow-4xl px-6 py-4 rounded-xl w-full font-bold  text-white scale-100 hover:scale-100 active:scale-110 transition-transform duration-200 ease-in-out"
                      type="submit"
                      disabled={isSubmitting}
                      aria-label="Únete ahora"
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar'}
                    </button>
                  </div>
                  <AnimatePresence>
                    {submitStatus.message && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className={`relative w-full text-center p-2 rounded-lg mt-4 ${
                          submitStatus.success ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                        }`}
                      >
                        {submitStatus.message}
                        {submitStatus.success && (
                          <button
                            onClick={handleClose}
                            className="top-1/2 right-2 absolute hover:opacity-70 p-1 -translate-y-1/2 shine-effect"
                            aria-label="Cerrar"
                          >
                            <CloseIcon className="w-4 h-4" />
                          </button>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
              <div
                className="top-6 right-6 z-50 fixed w-5 h-5 text-[rgb(255,255,255,0.7)] hover:text-white transition cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <CloseIcon />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
