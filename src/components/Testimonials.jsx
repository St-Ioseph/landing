import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

const testimonialsData = [
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    content:
      "Las herramientas anal ticas poderosas nos han ayudado a simplificar nuestros procesos y a tomar decisiones basadas en datos que tienen un impacto positivo en nuestra eficiencia. Tailcast ha sido un cambio de juego para nuestro negocio. La plataforma es f cil de usar, y los conocimientos que hemos obtenido han llevado a mejoras significativas.",
    image: testimonial1,
  },
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    content:
      "Las herramientas anal ticas poderosas nos han ayudado a simplificar nuestros procesos y a tomar decisiones basadas en datos que tienen un impacto positivo en nuestra eficiencia. Tailcast ha sido un cambio de juego para nuestro negocio. La plataforma es f cil de usar, y los conocimientos que hemos obtenido han llevado a mejoras significativas.",
    image: testimonial2,
  },
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    content:
      "Las herramientas anal ticas poderosas nos han ayudado a simplificar nuestros procesos y a tomar decisiones basadas en datos que tienen un impacto positivo en nuestra eficiencia. Tailcast ha sido un cambio de juego para nuestro negocio. La plataforma es f cil de usar, y los conocimientos que hemos obtenido han llevado a mejoras significativas.",
    image: testimonial3,
  },
];

export const Testimonials = () => (
  <section className="relative flex justify-center bg-bgDark2 mb-16 lg:mb-32 pt-16 w-full">
    <div className="-top-16 absolute" id="feedback" />
    <div className="flex flex-col justify-center w-full lg:w-[1150px]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="block-subtitle mb-6 text-center">Testimonios</div>
        <div className="block-big-title mb-20 px-8 sm:px-24 md:px-48 text-center">
          Recomendaciones y agradecimientos de nuestros clientes
        </div>

        <div className="flex lg:flex-row flex-col items-center gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="flex flex-col bg-bgDark3 px-6 py-4 main-border-gray-darker rounded-xl w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2">
                <QuoteIcon />
              </div>
              <div className="content-text-white">"{testimonial.content}"</div>
              <div className="flex mt-4 xl:mt-8 mb-2 xl:mb-4">
                <div>
                  <img
                    src={testimonial.image.src}
                    alt="Avatar del cliente"
                    width="45px"
                    height="5px"
                    aria-label={testimonial.customerName}
                  />
                </div>
                <div className="flex flex-col ml-4">
                  <div className="font-medium content-text-white">
                    {testimonial.customerName}
                  </div>
                  <div className="content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
