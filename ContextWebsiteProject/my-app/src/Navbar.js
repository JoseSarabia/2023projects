import Reac, {useContext} from "react"
import { ThemeContext } from "./themeContext"


function Navbar(props) {

    const {color} = useContext(ThemeContext)


    return (
        <div className={`${color}-theme`}  >
            <a>Home </a>
            <a> News </a>
            <a>Contact </a>
            <a> About </a>
            
        </div>
    )
}

export default Navbar