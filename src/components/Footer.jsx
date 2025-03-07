import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { TwitterIcon } from "../assets/icons/TwitterIcon";
import WspButton from "./shared/wsp";
import IosephLogoTitle from "./shared/ioseph";

const footerData = [
  {
    title: "Productos",
    items: [
      "Servicios",
      "Sobre Nosotros",
      "Noticias y Historias",
      "Mapa del camino",
    ],
  },
  {
    title: "Enlaces Importantes",
    items: [
      "Equipo de la Organización",
      "Nuestros Viajes",
      "Planes de Precio",
      "Mapa del camino",
      "Términos y Condiciones",
      "Política de Privacidad",
    ],
  },
  {
    title: "Compañía",
    items: ["Sobre Nosotros", "Trabajos", "Prensa", "Contáctenos"],
  },
];

export const Footer = () => {
  return (
    <footer
      className="flex flex-col sm:flex-row gap-6 justify-around items-center pt-10  lg:pt-20 lg:pb-16 bg-bgDark1 radius-for-skewed "
      aria-label="Pie de página del sitio"
    >
      <div>
        <WspButton />
      </div>
      <div className="flex flex-col justify-center items-center sm:flex-row gap-8">
        <IosephLogoTitle  showWeb/>
      </div>

      <div className="flex flex-row justify-center items-center gap-6 ">
        <a
          className="inline-block w-10 h-10 p-2 pt-[0.55rem] outlined-button"
          href="#"
          aria-label="Facebook"
        >
          <FacebookIcon />
        </a>
        <a
          className="inline-block w-10  h-10 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
          href="#"
          aria-label="Twitter"
        >
          <TwitterIcon />
        </a>
        <a
          className="inline-block w-10  h-10 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
          href="#"
          aria-label="Instagram"
        >
          <InstagramIcon />
        </a>
      </div>
    </footer>
  );
};
