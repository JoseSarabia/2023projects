import React from "react"
import Navbar from "./Navbar"
import stylersheet from "./stylesheet.css"
import header from "./header.css"

function Header(props)  {

    return(
        <div>
            <Navbar/>
            <h1>Clean Blog</h1>
         <h1> A Blog Theme by Start BootStrap</h1>

        </div>
        

    )
}

export default Header