import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { LinkedInIcon } from "../assets/icons/LinkedInIcon";
import WspButton from "./shared/wsp";
import IosephLogoTitle from "./shared/ioseph";

const footerData = [
  {
    title: "Productos",
    items: ["Servicios", "Sobre Nosotros", "Noticias y Historias", "Mapa del camino"],
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


const FooterItem = [
  {
    ariaLabel: "Facebook",
    icon: <FacebookIcon />,
    href: "https://www.facebook.com/ioseph.dev/",
  },
  {
    ariaLabel: "LinkedIn",
    icon: <LinkedInIcon />,
    href: "https://www.linkedin.com/company/ioseph-dev/",
  },
  {
    ariaLabel: "Instagram",
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/ioseph.dev",
  },
]

export const Footer = () => {
  return (
    <footer
      className="flex sm:flex-row flex-col justify-around items-center gap-6 bg-bgDark1 py-10 lg:py-20 lg:pb-16 radius-for-skewed"
      aria-label="Pie de página del sitio"
    >
      <div>
        <WspButton />
      </div>
      <div className="flex sm:flex-row flex-col justify-center items-center gap-2">
        <IosephLogoTitle showWeb />
      </div>

      <div className="flex flex-row justify-center items-center gap-6">
        {FooterItem.map((item, index) => (
          <a
            target="_blank"
            key={index}
            className="inline-block p-2 pt-[0.55rem] outlined-button w-10 h-10"
            href={item.href}
            aria-label={item.ariaLabel}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};
