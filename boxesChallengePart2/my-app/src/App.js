import React ,{useState} from "react"
import boxes from "./boxes"
import style from "./style.css"
import Box from "./Box"


function  App() {

  const [squares , setSquares ]= useState(boxes)

  const squaresElements = squares.map(sqaure => (
    <Box key={sqaure.id}  on={squares.on}/>
  ))



     return (

    <div>

      
      {squaresElements}
    </div>
  )
}


export default App