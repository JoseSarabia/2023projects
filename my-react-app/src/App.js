
import Header from "./Header"
import Button from "./Button"
import {ThemeContextProvider} from "./themeContext"
import style from "./style.css"
import React , {useState}  from "react"



function App () {


const [color, setColor] = useState(["blue", "green"])

 
function changeColor () {

    setColor(prevColor => {
      return [...prevColor, `red $(prevColor.length + 1)`]
    })
}

  const newColor = color.map(thing => <p key= {thing}>{thing}</p>)





  return (


    <div>
        <button onClick={changeColor} > Change color</button>
        {newColor}



    </div>
  )
}

// function App(props) {

 

  

//   return (


//       <>
//       <ThemeContextProvider >
//         <Header/>
//         <Button/>

//         </ThemeContextProvider>

//       </>



//   )
// }

export  default App;
