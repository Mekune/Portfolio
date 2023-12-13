import { useState } from "react";

const Tuto = () => {
  const title = "";
  const linkStrytTwitch = "https://www.twitch.tv/strytfire";
  return (
    <section id="home" className="pt-14 pb-14">
      <h1 className="text-5xl mt-14 mb-12 underline decoration-double">
        WELCOME TO MY PORTFOLIO
      </h1>
      <a
        className="underline decoration-dashed hover:decoration-solid"
        target="blank"
        href={linkStrytTwitch}
      >
        A quand un live sur léthal company ?
      </a>
    </section>
  );
};

export default Tuto;
