import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="flex">
                <img className="icon" src="/img/pokeball2.png" alt="logo" />
                <h2 className="font">Gabriel Dantas</h2>
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