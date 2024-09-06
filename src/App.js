import React from "react";
import ReactDom from "react-dom/client"
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import { createBrowserRouter, Outlet, RouterProvider  } from "react-router-dom";
import About from "./About";
import Error from "./Error";
import Services from "./Services";
import Contact from "./Contact";


const App = () => {

    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        errorElement: <Error />,
        children:[
            {
                path:"/",
                element:<div className="AppDiv">
                <Body />
                </div>
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/services",
                element:<Services/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
        ]
    },
])


const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<RouterProvider router = {router}/>)