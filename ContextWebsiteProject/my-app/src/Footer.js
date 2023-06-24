import React, {useContext} from "react"
import { ThemeContext } from "./themeContext"



function Footer() {

    const {color} = useContext(ThemeContext)


    return(
        <div  className={`${color}-theme`}>

        <h1 className="footersection">
            The Amazing Footer
         </h1>
        </div>
    )
}

export default Footer