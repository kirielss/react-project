import { useContext } from "react";
import PkmContext from "./PkmContext";
import { useNavigate } from "react-router-dom";

const PKM_URL = "https://pokeapi.co/api/v2/pokemon/";
const MAX_PKM = 386;

const Entry = () => {
  const { setPkm } = useContext(PkmContext);
  const navigate = useNavigate();

  async function getPokemon() {
    const random = Math.floor(Math.random() * MAX_PKM);
    const promise = await fetch(PKM_URL + random);
    const json = await promise.json();
    setPkm({
      id: json.id,
      name: json.name,
      backSprite: json.sprites.back_default,
      frontSprite: json.sprites.front_default,
    });
    console.log(json.id, json.name);
    navigate("/Gotcha");

  }

  return (
    <div className="container-entry">
      <div className="entry">
        <h1>Bem vindo!</h1>
        <p>Clique no botão abaixo e receba seu Pokémon inicial!</p>
        <button onClick={getPokemon}>Start!!!</button>
      </div>
    </div>
  );
};

export default Entry;
