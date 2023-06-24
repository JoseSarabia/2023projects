import React from "react"
import Navbar from "./Navbar"
import Main from "./Main"
import Footer from "./Footer"
import style from "./style.css"
import {ThemeContextProvider} from "./themeContext"


function App(props) {



  return(
       <>
       <ThemeContextProvider>
        <Navbar/>
        <Main/>
        <Footer/>
        
       </ThemeContextProvider>
       </>


  )
}


export default App

