import React from "react";

const Header = () => (
  <header className="z-[999] relative ">
    <div
      className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
      style={{
        opacity: 1,
        transform: "translateX(-50%) translateY(0px) translateZ(0px)",
      }}
    ></div>
    <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
      <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
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
              {/* Converts '#home' to 'Home' */}
              <span
                className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
              ></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
