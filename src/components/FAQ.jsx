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
  <section className="relative bg-blueGray-50 -mt-8 sm:mt-0 pt-12 sm:pt-16 pb-16 overflow-hidden">
    <div className="-top-10 absolute" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="z-10 relative mx-auto px-2 sm:px-8 lg:px-4 w-11/12 sm:w-full container">
        <div className="mx-auto md:max-w-4xl">
          <p className="block-subtitle mb-7 text-center">¿Tienes alguna pregunta?</p>
          <h2 className="block-big-title mb-16 text-center">
            Preguntas Frecuentes
          </h2>
          <div className="flex flex-wrap -m-1 mb-11">
            {FAQData.map((item, index) => (
              <div className="p-1 w-full" key={`${item.question}-${index}`}>
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
      className="relative bg-bgDark3 hover:bg-bgDark3Hover mb-4 px-3 sm:px-8 pt-2 sm:pt-6 pb-2 main-border-gray-darker rounded-3xl transition cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col justify-center items-start p-2">
        <h3 className="pt-3 sm:pt-0 pr-8 sm:pr-0 content-title">{title}</h3>
        <p
          className={`text-secondaryText pt-4 transition-height duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="top-6 sm:top-8 right-4 sm:right-8 absolute">
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
