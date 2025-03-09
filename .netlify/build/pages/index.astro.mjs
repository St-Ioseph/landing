/* empty css                                 */
import { c as createComponent, d as renderComponent, r as renderTemplate } from '../chunks/astro/server_BGMPX5oY.mjs';
import 'kleur/colors';
import 'html-escaper';
import { I as InvitationModal, C as CheckArrowIcon, $ as $$Layout, N as Navbar, F as Footer, S as ScrollUpButton } from '../chunks/ScrollUpButton_DGOsIrtG.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { motion } from 'framer-motion';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const dashboard = new Proxy({"src":"/_astro/dashboard.C84uFB28.png","width":1356,"height":792,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/darthkenar/IOSEPH/landing/src/assets/images/dashboard.png";
							}
							
							return target[name];
						}
					});

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "flex justify-center items-center bg-bgDark1 hero-bg-gradient mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 pb-24 sm:pb-32 md:pb-44 lg:pb-0 w-screen",
      id: "home",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 w-full md:w-[800px] xl:w-[900px] text-center", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              children: /* @__PURE__ */ jsx("h1", { className: "mt-14 sm:mt-20 mb-6 font-normal text-secondaryColor md:text-md text-xs sm:text-sm lg:text-lg xl:text-xl", children: "Empresa de Desarrollo de Software. Mendoza, Argentina" })
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.05 },
              children: [
                /* @__PURE__ */ jsx("h2", { className: "px-8 sm:px-8 md:px-20 lg:px-4 font-medium text-primaryText text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-relaxed tracking-wide line", children: "Tu socio de confianza para Aplicaciones Web" }),
                /* @__PURE__ */ jsx("h2", { className: "mt-2 sm:mt-2 px-8 sm:px-20 md:px-24 lg:px-24 font-medium text-primaryText text-2xl xl:text-4xl sm:text-5xl lg:text-6xl tracking-wide" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.15 },
              children: /* @__PURE__ */ jsxs("div", { className: "flex sm:flex-row flex-col justify-center gap-2 mt-14 mb-24 sm:mb-40", children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    className: "mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0 w-64 sm:w-52 h-12 contained-button",
                    children: /* @__PURE__ */ jsx("a", { className: "text-bgDark2", href: "/#features", children: "¿Qué hacemos?" })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    className: "flex justify-center items-center bg-bgDark2 hover:bg-bgDark3 border border-primaryColor border-solid rounded-xl w-64 sm:w-52 h-12 font-medium text-primaryText transition cursor-pointer",
                    onClick: () => setIsModalOpen(true),
                    "aria-label": "Correo",
                    children: "Dejanos tu correo"
                  }
                )
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 10, zIndex: 20 },
              animate: { opacity: 1, y: 0, zIndex: 20 },
              transition: { duration: 0.5, delay: 0.15 },
              children: /* @__PURE__ */ jsx("div", { className: "relative flex justify-center w-screen", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: dashboard.src,
                  alt: "Imagen de dashboard",
                  className: "lg:top-6 xl:top-0 z-10 absolute mx-auto hero-dashboard-border-gradient main-border-gray rounded-xl w-4/5 2xl:w-[1000px]"
                }
              ) })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "relative flex justify-center w-screen", children: /* @__PURE__ */ jsx("div", { className: "hidden lg:block shape-divider-bottom-1665343298 mt-4 sm:mt-16 md:mt-52", children: /* @__PURE__ */ jsx(
            "svg",
            {
              "data-name": "Layer 1",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1200 120",
              preserveAspectRatio: "none",
              className: "bg-bgDark2",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M1200 0L0 0 598.97 114.72 1200 0z",
                  className: "bg-bgDark1 fill-bgDark1 shape-fill"
                }
              )
            }
          ) }) })
        ] }),
        isModalOpen && /* @__PURE__ */ jsx(InvitationModal, { isOpen: isModalOpen, setIsOpen: setIsModalOpen })
      ]
    }
  );
};

const feature1 = new Proxy({"src":"/_astro/feature1.D_pBMN-q.webp","width":400,"height":400,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/darthkenar/IOSEPH/landing/src/assets/images/feature1.webp";
							}
							
							return target[name];
						}
					});

const feature2 = new Proxy({"src":"/_astro/feature2.D-DsZO40.jpg","width":351,"height":351,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/darthkenar/IOSEPH/landing/src/assets/images/feature2.jpg";
							}
							
							return target[name];
						}
					});

const feature3 = new Proxy({"src":"/_astro/feature3.BDhSYK7X.jpg","width":351,"height":349,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/darthkenar/IOSEPH/landing/src/assets/images/feature3.jpg";
							}
							
							return target[name];
						}
					});

const feature4 = new Proxy({"src":"/_astro/feature4.Bl4cjQX_.jpg","width":351,"height":348,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/darthkenar/IOSEPH/landing/src/assets/images/feature4.jpg";
							}
							
							return target[name];
						}
					});

const Features1 = () => {
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "bg-bgDark2 -mt-8 sm:-mt-8 xl:-mt-8 2xl:mt-0 mb-8 sm:mb-24 pt-24 md:pt-[12vw] lg:pt-16 w-full",
      id: "features",
      children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: 0.2 },
          children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center mx-auto xl:pr-16 md:pl-4 xl:pl-16 w-11/12 2xl:w-[1450px] xl:w-[1300px]", children: [
            /* @__PURE__ */ jsx("div", { className: "mb-12 lg:mb-0 w-full lg:w-1/2", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset", children: [
              /* @__PURE__ */ jsx("span", { className: "block-subtitle", children: "Soluciones web innovadoras para tu empresa" }),
              /* @__PURE__ */ jsx("h2", { className: "block-big-title mt-6 mb-8 text-4xl lg:text-5xl", children: "Impulsamos tu negocio con tecnología a medida" }),
              /* @__PURE__ */ jsx("p", { className: "mb-10 text-secondaryText leading-loose", children: "Desarrollamos sistemas de gestión y plataformas web personalizadas con analíticas avanzadas para optimizar tus operaciones." }),
              /* @__PURE__ */ jsxs("ul", { className: "mb-6 text-primaryText", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex mb-4", children: [
                  /* @__PURE__ */ jsx(CheckArrowIcon, {}),
                  /* @__PURE__ */ jsx("span", { children: "Paneles de control intuitivos y dinámicos." })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex mb-4", children: [
                  /* @__PURE__ */ jsx(CheckArrowIcon, {}),
                  /* @__PURE__ */ jsx("span", { children: "Reportes y analíticas personalizadas." })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex mb-4", children: [
                  /* @__PURE__ */ jsx(CheckArrowIcon, {}),
                  /* @__PURE__ */ jsx("span", { children: "Automatización y optimización de procesos." })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center mx-auto lg:-mx-4 xl:px-8 lg:pt-10 sm:pr-8 lg:pl-4 w-3/4 lg:w-1/2", children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-8 lg:mb-0 px-2 lg:px-0 w-full sm:w-1/2", children: [
                /* @__PURE__ */ jsx("div", { className: "mb-4 py-3 pr-2 pl-3 rounded", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: feature1.src,
                    alt: "Imagen de característica 1",
                    className: "mx-auto sm:mx-unset main-border-gray rounded-xl",
                    "aria-label": "Imagen de característica 1"
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { className: "py-3 pr-2 pl-3 rounded", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: feature2.src,
                    alt: "Imagen de característica 2",
                    className: "mx-auto sm:mx-unset main-border-gray rounded-xl",
                    "aria-label": "Imagen de característica 2"
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "hidden sm:inline-block lg:mt-20 px-2 pt-12 lg:pt-0 w-1/2", children: [
                /* @__PURE__ */ jsx("div", { className: "mb-4 py-3 pr-2 pl-3 rounded-lg", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: feature3.src,
                    alt: "Imagen de característica 3",
                    className: "main-border-gray rounded-xl",
                    "aria-label": "Imagen de característica 3"
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { className: "py-3 pr-2 pl-3 rounded-lg", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: feature4.src,
                    alt: "Imagen de característica 4",
                    className: "main-border-gray rounded-xl",
                    "aria-label": "Imagen de característica 4"
                  }
                ) })
              ] })
            ] })
          ] })
        }
      )
    }
  );
};

const feature5 = new Proxy({"src":"/_astro/feature5.DIa3yUVV.jpg","width":504,"height":277,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/darthkenar/IOSEPH/landing/src/assets/images/feature5.jpg";
							}
							
							return target[name];
						}
					});

const feature6 = new Proxy({"src":"/_astro/feature6.CECimZdD.jpg","width":505,"height":273,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/darthkenar/IOSEPH/landing/src/assets/images/feature6.jpg";
							}
							
							return target[name];
						}
					});

const Features2 = () => /* @__PURE__ */ jsx("section", { className: "bg-bgDark2 lg:my-20 mt-12 sm:mt-24 mb-12 lg:mb-24 pt-4 w-full", children: /* @__PURE__ */ jsx(
  motion.div,
  {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5, delay: 0.2 },
    children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center mx-auto xl:pr-16 md:pl-4 xl:pl-16 w-11/12 2xl:w-[1450px] xl:w-[1300px]", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center order-last lg:order-first mx-auto lg:-mx-4 sm:pr-8 w-11/12 sm:w-3/4 lg:w-1/2", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center mb-8 lg:mb-0 px-2 md:pl-8 lg:pl-16 w-full", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-4 py-3 md:pr-20 lg:pr-12 md:pl-3 rounded", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: feature5.src,
            alt: "Imagen de característica 5",
            className: "main-border-gray rounded-xl"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "py-3 md:pr-2 md:pl-20 lg:pl-12 rounded", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: feature6.src,
            alt: "Imagen de característica 6",
            className: "main-border-gray rounded-xl"
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "mb-12 lg:mb-0 xl:pl-8 w-full lg:w-1/2", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset text-end", children: [
        /* @__PURE__ */ jsx("span", { className: "block-subtitle", children: "Convertí tus datos en información accesible para hacer crecer tu negocio" }),
        /* @__PURE__ */ jsx("h2", { className: "block-big-title mt-6 mb-8 text-4xl lg:text-5xl text-end", children: "Te ayudamos a tomar decisiones con información precisa" }),
        /* @__PURE__ */ jsx("p", { className: "mb-12 text-secondaryText text-end leading-loose", children: "Accede a datos clave en tiempo real con nuestros sistemas de gestión y analíticas avanzadas. Optimizá tu operación y mejora tu toma de decisiones con herramientas intuitivas." }),
        /* @__PURE__ */ jsxs("ul", { className: "flex flex-col justify-end mb-6 text-primaryText", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex flex-row justify-end gap-4 mb-4", children: [
            /* @__PURE__ */ jsx("span", { children: "Gráficas y análisis de datos." }),
            /* @__PURE__ */ jsx(CheckArrowIcon, {})
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex flex-row justify-end gap-4 mb-4", children: [
            /* @__PURE__ */ jsx("span", { children: "Controles detallados y personalizables." }),
            /* @__PURE__ */ jsx(CheckArrowIcon, {})
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex flex-row justify-end gap-4 mb-4", children: [
            /* @__PURE__ */ jsx("span", { children: "Alertas y notificaciones en tiempo real." }),
            /* @__PURE__ */ jsx(CheckArrowIcon, {})
          ] })
        ] })
      ] }) })
    ] })
  }
) });

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ioseph Dev | Aplicaciones Web" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/darthkenar/IOSEPH/landing/src/components/Navbar.jsx", "client:component-export": "Navbar" })} ${renderComponent($$result2, "Hero", Hero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/darthkenar/IOSEPH/landing/src/components/Hero.jsx", "client:component-export": "Hero" })}  ${renderComponent($$result2, "Features1", Features1, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/darthkenar/IOSEPH/landing/src/components/Features1.jsx", "client:component-export": "Features1" })} ${renderComponent($$result2, "Features2", Features2, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/darthkenar/IOSEPH/landing/src/components/Features2.jsx", "client:component-export": "Features2" })}       ${renderComponent($$result2, "Footer", Footer, {})} ${renderComponent($$result2, "ScrollUpButton", ScrollUpButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/darthkenar/IOSEPH/landing/src/components/ScrollUpButton", "client:component-export": "ScrollUpButton" })} ` })}`;
}, "/home/darthkenar/IOSEPH/landing/src/pages/index.astro", void 0);

const $$file = "/home/darthkenar/IOSEPH/landing/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
