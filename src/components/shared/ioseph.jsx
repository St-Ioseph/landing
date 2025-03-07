import React from "react";
import { IosephLogo } from "../../assets/logos/IosephLogo";

const IosephLogoTitle = ({ showWeb }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex justify-center items-center">
        <div className="mr-2 text-6xl text-white">
          <IosephLogo />
        </div>
        <div className="text-white font-bold text-2xl">Ioseph</div>
      </div>

      {showWeb && (
        <div className="text-center text-gray-400 font-['Inter'] font-bold text-xs">
          www.ioseph.dev
        </div>
      )}
    </div>
  );
};

export default IosephLogoTitle;
