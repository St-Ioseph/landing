import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "¿Puedo actualizar o degradar mi plan en cualquier momento?",
    answer:
      "Sí, puedes actualizar o degradar tu plan en cualquier momento. Simplemente navega a la configuración de tu cuenta en tu panel de control y selecciona el plan deseado. Los cambios se reflejarán inmediatamente y cualquier ajuste en el precio se aplicará en tu próximo ciclo de facturación. Nuestro equipo de soporte estará encantado de proporcionarte orientación y recomendaciones.",
  },
  {
    question: "¿Cómo reclamo mi oferta de descuento del 25%?",
    answer:
      "Para reclamar tu descuento del 25%, simplemente regístrate y usa el código promocional al finalizar la compra. El descuento se aplicará automáticamente a tu compra.",
  },
  {
    question: "¿Cuál es tu política de reembolso?",
    answer:
      "Ofrecemos una garantía de devolución de dinero de 30 días en todos nuestros planes. Si no estás satisfecho con nuestro producto, simplemente contacta a nuestro equipo de soporte dentro de los 30 días posteriores a la compra para obtener un reembolso completo.",
  },
  {
    question: "¿Cómo puedo obtener soporte para el producto?",
    answer:
      "Nuestro equipo de soporte dedicado está aquí para ayudarte. Puedes contactarnos a través del formulario de contacto en nuestro sitio web, enviar un correo electrónico o interactuar con nosotros a través del chat en vivo. Estaremos encantados de ayudarte con cualquier pregunta o inquietud que tengas",
  },
];

export const FAQ = () => (
  <section className="relative -mt-8 sm:mt-0 pt-12 sm:pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 block-subtitle text-center">¿Tienes alguna pregunta?</p>
          <h2 className="mb-16 block-big-title text-center">
            Preguntas Frecuentes
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1" key={`${item.question}-${index}`}>
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-bgDark3 main-border-gray-darker mb-4 relative hover:bg-bgDark3Hover cursor-pointer transition"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" content-title pt-3 sm:pt-0 pr-8 sm:pr-0">{title}</h3>
        <p
          className={`text-secondaryText pt-4 transition-height duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
