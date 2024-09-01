import "./Header.css"

const Header = () => {

    return(
        <>
        <header>
            <img src="https://static.vecteezy.com/system/resources/previews/021/953/308/non_2x/food-ordering-app-logo-with-points-and-fork-shapes-in-the-center-free-vector.jpg"  alt="logo"/>
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