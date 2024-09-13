import "./Header.css"
import { headerImgUrl } from "../config"
import { Link } from "react-router-dom"


const Header = () => {

    return(
        <>
        <header>
            <img src={headerImgUrl} alt="logo"/>
            <div className="list">
                <ul>
                    <li><Link to={`/`}>Home</Link></li>
                    <li><Link to={`/about`}>About</Link></li>
                    <li><Link to={`/services`}>Services</Link></li>
                    <li><Link to={`/contact`}>Contact</Link></li>
                    <li><Link to={`/cart`}>Cart</Link></li>
                </ul>

            </div>
        </header>
        </>
    )
}

export default Header