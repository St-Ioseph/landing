import React from "react";
import { WspIcon } from "../../assets/icons/WspIcon";

const WspButton = () => {
  return (
    <a
      className="flex justify-center items-center bg-green-600 hover:bg-green-800 pt-2 pr-8 pb-2 pl-6 main-border-gray rounded-xl text-white text-sm hover:scale-110 transition-all duration-300"
      href="https://wa.me/+5492613337751?text=Hola, mi nombre es "
      target="_blank"
      aria-label="numero telefónico"
    >
      <WspIcon className="text-white" />
      <span className="text-xl">Hablemos</span>
    </a>
  );
};

export default WspButton;
