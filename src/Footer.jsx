import { useContext } from "react"
import { Link } from "react-router-dom";
import PkmContext  from "./PkmContext"

const POKEDEX =  "https://www.pokemon.com/br/pokedex/"

const Footer = () => {
    const { pkm } = useContext(PkmContext);
    return (
        <div className="footer">
            <a href={POKEDEX + pkm.name} rel={"noreferrer"} target={"_blank"}><img src={pkm.backSprite} alt="back sprite" /></a>
            <div>
                <h3>Não gostou do Pokémon?</h3>
                <Link className="a" to={"/"}>Clique aqui e tente a sorte!</Link>
            </div>
        </div>
    )
}

export default Footer