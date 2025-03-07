import React from "react";
import { WspIcon } from "../../assets/icons/WspIcon";

const WspButton = () => {
  return (
    <a
      className="main-border-gray flex justify-center items-center  pt-2 pr-8 pb-2 pl-6 text-sm text-white bg-green-600 rounded-xl hover:bg-green-800 transition-all duration-300 hover:scale-110"
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
