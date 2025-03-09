import React from "react";
import { WspIcon } from "../../assets/icons/WspIcon";

const WspButton = () => {
  return (
    <a
      // className="flex justify-center items-center bg-green-600 hover:bg-green-800 pt-2 pr-8 pb-2 pl-6 main-border-gray rounded-xl text-white text-sm hover:scale-110 transition-all duration-300 shine-effect"
      className="flex justify-center items-center bg-bgDark2 hover:bg-bgDark3 border border- border-solid rounded-xl w-64 sm:w-52 h-12 font-medium text-primaryText transition cursor-pointer shine-effect"
      href="https://wa.me/+5492613337751?text=Hola, mi nombre es "
      target="_blank"
      aria-label="numero telefónico"
    >
      <WspIcon className="text-white" />
      <span className="text-md">Hablemos</span>
    </a>
  );
};

export default WspButton;
