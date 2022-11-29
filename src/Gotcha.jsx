import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import PkmContext from "./PkmContext"

const POKEDEX = "https://www.pokemon.com/br/pokedex/"
const toTitleCase = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

const Gotcha = () => {
    const navigate = useNavigate();
    const redirect = () => {
    setTimeout((() => navigate("/Home")), 5000)
}

    const { pkm } = useContext(PkmContext)
    return (
        <div className="container-entry">
            <div className="gotcha">
                <p>Parabéns!!! Você capturou</p>
                <h2> {pkm.name.toUpperCase()}</h2>
{/*                 <img src={pkm.backSprite} alt="back sprite"></img>
 */}                <img src={pkm.frontSprite} alt="front sprite"></img>
                <a href={POKEDEX + pkm.name} rel={"noreferrer"} target={"_blank"}>Saiba mais sobre {toTitleCase(pkm.name)}</a>
            </div>
            {redirect()}
        </div>
    )
}

export default Gotcha