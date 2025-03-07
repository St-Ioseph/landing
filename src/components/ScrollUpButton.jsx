import { useEffect, useState } from "react";

export const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else if (scrolled <= 300) {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="right-6 bottom-6 z-50 fixed flex justify-center items-center bg-bgDark2 hover:bg-bgDark3 main-border-gray rounded-xl w-12 h-12 transition cursor-pointer"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="35px"
            height="35px"
            viewBox="0 0 20 20"
          >
            <path
              d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
              stroke="rgb(234, 179, 8)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      )}
    </>
  );
};
