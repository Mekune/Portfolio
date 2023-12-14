import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 25) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-screen transition-all duration-400 ${
        scrolled ? "h-14" : "h-10"
      } ${scrolled ? "bg-black" : ""}`}
    >
      <ul
        className={`flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 transition-all duration-400 ${
          scrolled ? "h-14" : "h-10"
        }`}
      >
        {[
          "#home",
          "#about",
          "#projects",
          "#skills",
          "#experience",
          "#contact",
        ].map((href, index) => (
          <li
            key={index}
            className="h-3/4 flex items-center justify-center relative"
            style={{ opacity: 1, transform: "none" }}
          >
            <a
              className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300 text-gray-950 dark:text-gray-200"
              href={href}
            >
              {href.substring(1).charAt(0).toUpperCase() + href.substring(2)}{" "}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
