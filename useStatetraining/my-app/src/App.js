import React , {useState} from "./react"

function App() {


  const [count , setCount] = useState(0)

  function add() {

    setCount(prevCount => prevCount + 1)
  }

  return(


    <div className= "counter">

      <h1>{count}</h1>
      <button className = "counter--plus" onClick={add}></button>

      <h1>good</h1>
    </div>
  )
}


export default App