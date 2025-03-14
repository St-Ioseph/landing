import React from "react";
import { IosephLogo } from "../../assets/logos/IosephLogo";

const IosephLogoTitle = ({ showWeb }) => {
  const [url, setUrl] = React.useState("www.ioseph.dev");
  const copyToClipboard = async () => {
    console.log("Copiando...");
    try {
      await navigator.clipboard.writeText(url);
      setUrl("¡Copiado!");
      setTimeout(() => {
        setUrl("www.ioseph.dev");
      }, 2000);
    } catch (error) {
      console.error("Error al copiar la URL: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-0">
      <div className="flex justify-center items-center">
        <div className="-ml-5 text-white text-xl">
          <IosephLogo />
        </div>
        <div className="font-medium text-white text-3xl">Ioseph</div>
      </div>
      {showWeb && (
        <div
          onClick={copyToClipboard}
          className="font-['Inter'] font-normal text-gray-400 hover:text-gray-300 text-sm lg:text-lg text-center transition-colors cursor-pointer select-text"
        >
          {url}
        </div>
      )}
    </div>
  );
};

export default IosephLogoTitle;
