import React from "react";

export const Article = ({ articleData }) => {
  const { title, subtitle, date, image, content, footer } = articleData;
  return (
    <div className="relative flex justify-center bg-bgDark2 pt-2">
      <div className="px-2 sm:px-4">
        <article className="mt-16 sm:mt-24 mb-24 p-8 rounded-3xl w-full lg:w-[1200px] 2xl:w-[1400px] text-center">
          <header className="mb-12">
            <div className="my-4 text-secondaryText text-sm">{date}</div>
            <h1 className="mb-4 font-bold text-[2rem] text-primaryText xs:text-[2.8rem] lg:text-[3.5rem]">{title}</h1>
            <p className="mb-4 text-secondaryText text-lg">{subtitle}</p>
          </header>
          <img
            src={image}
            alt={title}
            className="mx-auto mt-8 mb-8 rounded-3xl w-10/12 md:w-3/4"
            aria-label={title}
          />
          <section
            className="mx-auto mt-16 w-full md:w-10/12 lg:w-2/3 text-secondaryText sm:text-xl text-left sm:text-justify !leading-8 sm:!leading-10"
            aria-labelledby="content-title"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className="mx-auto mt-8 w-4/5 lg:w-2/3 text-primaryText text-xl text-right">
            {footer}
          </div>
        </article>
      </div>
    </div>
  );
};
