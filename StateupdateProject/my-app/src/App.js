import React , {useState} from "react"
import app from "./app.css"

// function App()  {

// const [thingsArray, setThingsArray] = useState(["Things 1" , "Things 2" ,"Things 3"])

// function addItem() {

//         setThingsArray(prevThingsArray =>  {
//           return [...prevThingsArray, `King KOng ${prevThingsArray.length + 1}`]
       
//         }
//            )


// }

// const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)







//   return(
//     <div>
//       <button onClick={addItem}>Add item</button>
//       {thingsElements}

//     </div>
//   )
// }




function App () {


  const [color, setColor] = useState(["blue", "green"])
  
   
  function changeColor () {
  
      setColor(prevColor => {
        return [...prevColor, `red,  ${prevColor.length + 1}`]
      })
  }
  
    const newColor = color.map(blue => <p key= {blue}>{blue}</p>)
  
  
  
  
  
    return (
  
  
      <div>
          <button onClick={changeColor} > Change color</button>
          {newColor}
  
  
  
      </div>
    )
  }


export default App