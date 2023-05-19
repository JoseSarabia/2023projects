
import Header from "./Header"
import Button from "./Button"
import {ThemeContextProvider} from "./themeContext"
import style from "./style.css"



function App(props) {

 

  

  return (


      <>
      <ThemeContextProvider >
        <Header/>
        <Button/>

        </ThemeContextProvider>

      </>



  )
}

export  default App;
