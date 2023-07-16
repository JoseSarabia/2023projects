import React , {useState} from "react";
import Header from "./Header";
import Button from "./Button"
import ThemeContext from "./themeContext";
import style from "./style.css"

function App() {

  const [color, setColor] = useState("dark")

  const toggleTheme = () => {
    setColor(prevColor => prevColor === "dark" ? "light" : "dark")
  }




  return(
    <> 
    <ThemeContext.Provider value={{
      color: color,
      toggleTheme: toggleTheme
    }}>
       <Header/>
      <Button/>
    </ThemeContext.Provider>
    </>



    
  )
}

export default App
