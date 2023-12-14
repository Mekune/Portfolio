import { useState } from "react";

const Tuto = () => {
  const [name, setName] = useState("qui");
  const handleClick = () => {
    setName("leny");
  };
  const handleClickAgain = (name) => {
    setName("nans");
  };
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const title = "WELCOME TO MY PORTFOLIO";
  const linkStrytTwitch = "https://www.twitch.tv/strytfire";
  return (
    <div className="pt-14 pb-14">
      <h1 className="text-5xl mb-12 underline decoration-double"> {title}</h1>
      <h2 className="text-2xl underline decoration-dashed">Exercices</h2>
      <p className="m-5"> Nombre aléatoire : {Math.random() * 10} </p>
      <a
        className="underline decoration-dashed hover:decoration-solid"
        target="blank"
        href={linkStrytTwitch}
      >
        A quand un live sur léthal company ?
      </a>
      <br />
      <button onClick={handleClick}>Click</button>
      <br />
      <button onClick={() => handleClickAgain("nans")}>Clickagain</button>
      <br />
      <input
        className="text-black"
        value={name}
        onChange={handleChange}
        placeholder="Entrez votre texte ici..."
      />
      <br />
      <br />
      <p>{name}</p>
    </div>
  );
};

export default Tuto;

// faire passer une données d'un composant a un autre

// import BlockList from '...';

// const maDonnées;

// <BlockList blogs={maDonnées} title"ajout d'un titre"/>

// dans ce cas il y a un filtre et il y aura les blog seulement des blog.name nans
// <BlockList blogs={maDonnées.filter((blog) => blog.name === "nans"} title"ajout d'un titre"/>

// dans le composant :

// conts BlockList = (props) =>{

//   const blogs = props.'attribue'

// }
