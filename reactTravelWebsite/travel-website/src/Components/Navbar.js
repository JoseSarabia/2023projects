import React , {useState} from "react"
import {Link} from "react-router-dom";

function Navbar() {

    const [click, setClick] = useState(false)


    const handleClick = () => setClick(!click)
    return(

        <>
        <nav className="Navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    TRVL <i className="fa-typo3"/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? "nav-menu active": "nav-menue"}>
                    </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar