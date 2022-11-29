import { Link } from "react-router-dom"
import PkmContext from "./PkmContext"
import { useContext } from "react"

const POKEDEX = "https://www.pokemon.com/br/pokedex/"

const Header = () => {
    const { pkm } = useContext(PkmContext)
    return (
        <div className="header">
            <div className="flex">
            <a href={POKEDEX + pkm.name} rel={"noreferrer"} target={"_blank"}>
                <img src={pkm.frontSprite} alt={pkm.name} />
            </a>
                <h2 className="font">
                    <a className="font a" href={POKEDEX + pkm.name} rel={"noreferrer"} target={"_blank"}>
                        {pkm.name.toUpperCase()}
                    </a>
                </h2>
            </div>
            <ul className="flex">
                <li><Link className="a font" to={"/Home"}>Home</Link></li>
                <li><Link className="a font" to={"/About"}>Sobre</Link></li>
                <li><Link className="a font" to={"/Contact"}>Contato</Link></li>
            </ul>
        </div>
    )
}

export default Header