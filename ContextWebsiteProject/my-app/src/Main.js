import React, { useContext } from "react"
import Button from "./Button"
import {ThemeContext} from "./themeContext"

function Main() {

    const {color} = useContext(ThemeContext)


    return(
        <div  className={`${color}-theme`}>

        <h1 className="mainsection">Click the Button to toggle the {color} Theme</h1>
        <Button/>

        </div>
    )
}

export default Main