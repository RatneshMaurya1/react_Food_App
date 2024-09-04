import "./Header.css"
import { headerImgUrl } from "../config"


const Header = () => {

    return(
        <>
        <header>
            <img src={headerImgUrl} alt="logo"/>
            <div className="list">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>

            </div>
        </header>
        </>
    )
}

export default Header