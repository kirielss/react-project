import { useContext } from "react"
import PkmContext from "./PkmContext"

const Home = () => {
    const { pkm } = useContext(PkmContext)
    return (
        <div>
            <p>hey there!!! look what we got for u: {pkm.name}</p>
            <img src={pkm.backSprite} alt="back sprite"></img>
            <img src={pkm.frontSprite} alt="front sprite"></img>
        </div>
    )
}

export default Home