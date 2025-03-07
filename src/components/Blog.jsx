import { motion } from "framer-motion";

import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";

const blogData = [
  {
    title: "IA y Aprendizaje Automático",
    subtitle:
      "Descubrí información y tendencias en el mundo del análisis de datos. Sumergite en cómo la IA y el aprendizaje automático están revolucionando las industrias",
    image: blog1.src,
  },
  {
    title: "Análisis de Datos Basados en Datos",
    subtitle: "Explorá el impacto de la IA y el ML en el análisis de datos.",
    image: blog2.src,
  },
  {
    title: "Procesamiento de Datos en Tiempo Real",
    subtitle: "Aprendé sobre la importancia del procesamiento en tiempo real.",
    image: blog3.src,
  },
];

export const Blog = () => (
  <section className="relative flex justify-center bg-bgDark2 w-screen">
    <div className="-top-16 absolute" id="blog" />
    <div className="bg-bgDark2 pt-4 pb-0 lg:w-[1000px] 2xl:w-[1200px] xl:w-[1150px]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="mb-20 px-4 container">
          <div className="mx-auto lg:mr-0 mb-16 lg:ml-0 max-w-2xl lg:text-left text-center">
            <span className="block-subtitle">Nuestro Blog</span>
            <h2 className="mt-6 mb-6 font-heading font-bold text-primaryText text-4xl lg:text-5xl">
              Últimas Ideas
            </h2>
            <p className="mb-6 text-secondaryText">
              Mantenete actualizado con las últimas tendencias e ideas en nuestra industria.
            </p>
          </div>
          <div className="flex flex-wrap items-start -mx-4 lg:w-[1000px] 2xl:w-[1200px] xl:w-[1150px] h-auto sm:h-[30rem] lg:h-[31rem] xl:h-[35rem]">
            <div className="sm:hidden flex lg:flex mx-auto sm:mr-0 mb-8 lg:mb-0 sm:ml-0 px-4 w-11/12 lg:w-1/2 xl:w-3/5 h-full">
              <a href="/blog/article">
                <div className="bg-bgDark3 hover:bg-bgDark3Hover p-6 sm:p-10 rounded-3xl h-full transition cursor-pointer">
                  <img
                    src={blogData[0].image}
                    alt={blogData[0].title}
                    className="mb-6 rounded-3xl w-full"
                    aria-label={blogData[0].title}
                  />
                  <h3 className="mb-4 font-heading font-bold text-primaryText text-2xl">
                    {blogData[0].title}
                  </h3>
                  <p className="text-secondaryText leading-loose">
                    {blogData[0].subtitle}
                  </p>
                </div>
              </a>
            </div>
            <div className="hidden sm:flex flex-col justify-between mx-auto lg:mr-0 lg:ml-0 px-4 w-11/12 sm:w-4/5 lg:w-1/2 xl:w-2/5 h-full">
              {blogData.slice(1).map((post, index) => (
                <a
                  href="/blog/article"
                  key={`${post.title}-${index}`}
                  className="flex gap-4 bg-bgDark3 hover:bg-bgDark3Hover p-10 rounded-3xl h-1/2 min-h-1/2 max-h-[47%] transition cursor-pointer"
                >
                  <div className="pt-2">
                    <h3 className="mb-4 font-heading font-bold text-primaryText text-xl">
                      {post.title}
                    </h3>
                    <p className="text-secondaryText leading-loose">
                      {post.subtitle}
                    </p>
                  </div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="mb-6 rounded-3xl w-[9rem] lg:w-auto xl:w-full h-[9rem] lg:h-auto"
                    aria-label={post.title}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
