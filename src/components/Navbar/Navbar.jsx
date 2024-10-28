import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sun from "./../../../public/images/sun.svg";
import moon from "./../../../public/images/moon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Navbar({ head, links }) {
  // _______________________________________________________________________________

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  const [active, setActive] = useState(false);
  function handleClick() {
    setActive(!active);
  }

  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // _______________________________________________________________________________

  return (
    <nav
      className={`
        dark:bg-dark-main-color 
        flex 
         items-center
        ${
          active
            ? "flex-col h-screen justify-center gap-14 bg-white text-black dark:bg-dark-main-color dark:text-white"
            : `justify-between px-7% h-[96px] max-iPad:px-2% max-iPad:h-20
              ${
                scrolling
                  ? "shadow-lg bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 dark:text-white  bg-white "
                  : "text-dark-main-color dark:text-white  bg-white "
              }
            `
        }
        z-50 
        transition-height duration-300
        fixed
        w-full
        `}
    >
      <h1 className="text-xl max-sm:text-lg font-semibold capitalize ">
        {head}
      </h1>
      <ul
        className={
          active
            ? "flex justify-between items-center flex-col gap-5"
            : "flex justify-between items-center max-756:hidden"
        }
      >
        {links.map((element, index) => {
          return (
            <li key={index} className="m-3.5 relative group"   onClick={() => setActive(false)}>
              <Link
                className=" text-xl p-2 capitalize max-sm:text-lg   "
                to={`/${element.to}`}
              >
                {element.name}
              </Link>
              <span className="block absolute left-0 -bottom-1 h-0.5 w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          );
        })}
        <div
          className="bg-dark-main-color dark:bg-white flex justify-between gap-4 py-2 px-4 rounded-full relative cursor-pointer"
          onClick={toggleDarkMode}
        >
          <img src={sun} alt="sun" />
          <img src={moon} alt="moon" />
          <div
            className={`absolute bg-white w-6 h-6 rounded-full transition-all duration-100 ${
              isDarkMode ? "left-17%" : "left-59%"
            } dark:bg-dark-main-color`}
          ></div>
        </div>
      </ul>

      <FontAwesomeIcon
        icon={faBars}
        className={
          active
            ? "text-2xl hidden"
            : "text-2xl hidden max-756:block  dark:text-white text-dark-main-color cursor-pointer"
        }
        onClick={handleClick}
      />

      <FontAwesomeIcon
        icon={faXmark}
        className={
          active
            ? "absolute bottom-12 text-2xl  dark:text-white text-dark-main-color cursor-pointer"
            : "hidden"
        }
        onClick={handleClick}
      />
    </nav>
  );
}

export default Navbar;
