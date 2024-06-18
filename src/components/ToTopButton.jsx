import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const topBtn = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 1000;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className="flex justify-center items-center relative">
      {isVisible && (
        <button
          onClick={topBtn}
          className="text-2xl w-16 h-16 text-black bg-gray-300/60 rounded-[50%] fixed bottom-20 right-20 z-10 flex justify-center items-center cursor-pointer"
        >
          <FaArrowUp className="top-button--icon" />
        </button>
      )}
    </div>
  );
};

export default ToTopButton;
