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
  <section className="w-full flex justify-center pt-16 mb-16 lg:mb-32 bg-bgDark2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="block-subtitle text-center mb-6">Testimonios</div>
        <div className="block-big-title text-center mb-20 px-8 sm:px-24 md:px-48">
          Recomendaciones y agradecimientos de nuestros clientes
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 main-border-gray-darker rounded-xl bg-bgDark3 flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2">
                <QuoteIcon />
              </div>
              <div className="content-text-white">"{testimonial.content}"</div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
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
                  <div className="content-text-white font-medium">
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
