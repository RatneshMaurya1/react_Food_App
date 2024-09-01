import React from "react";
import ReactDom from "react-dom/client"
import Header from "./Header/Header";
import Body from "./Body/Body";


const App = () => {

    return(
        <>
        <Header/>
        <div className="AppDiv">
        <Body />
        </div>
        </>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<App />)