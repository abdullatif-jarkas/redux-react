// ScrollToTop.js
import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-[2%] px-4 py-2 bg-blue-500 rounded-lg bg-blue text-bg-blue transition-opacity duration-300 
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
