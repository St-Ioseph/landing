import { motion } from "framer-motion";
import { useState } from "react";

import { InvitationModal } from "./InvitationModal";
import featuresdiagonal from "../assets/images/featuresdiagonal.jpg";

export const FeaturesDiagonal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="flex flex-col justify-center items-center bg-bgDark1 lg:mb-16 w-full">
      <div className="shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-bgDark2 fill-bgDark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="bg-bgDark1 fill-bgDark1"
          ></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex lg:flex-row flex-col justify-center bg-bgDark1 mx-auto pt-12 lg:pt-24 pb-8 lg:pb-20 md:w-4/5 2xl:w-[1150px] xl:w-[1050px]">
          <div className="flex flex-col mx-auto lg:mx-unset w-3/4 lg:w-1/2">
            <span className="block-subtitle">Accelerate Your Success</span>
            <h2 className="block-big-title mt-10 mb-8 text-4xl lg:text-5xl">
              Build &amp; Launch without problems
            </h2>
            <p className="mb-16 text-secondaryText leading-loose">
              Our platform enables you to launch your data-driven projects with
              ease. Boost productivity and achieve better results. Empower your
              decision-making with advanced analytics
            </p>
            <button
              className="mr-10 w-[210px] h-12 contained-button"
              onClick={() => setIsModalOpen(true)}
              aria-label="Get started"
            >
              Get Started
            </button>
          </div>
          <div className="flex justify-center mx-auto pt-16 lg:pt-0 lg:pl-16 w-4/5 lg:w-1/2">
            <img
              src={featuresdiagonal.src}
              alt="Feature image"
              className="main-border-gray rounded-xl"
            />
          </div>
        </div>
      </motion.div>
      <div className="shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-bgDark2 fill-bgDark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="bg-bgDark1 fill-bgDark1"
          ></path>
        </svg>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
