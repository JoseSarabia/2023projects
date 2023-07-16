import React , {useState} from "react"


function  App() {

  const [count, setCount] = useState(0)

  function add() {

    setCount(prevCount => prevCount +1)
  }


  return(

    <div className="counter">
      <button className="counter--plus" onClick={add}>+</button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>




    </div>
  )
}

export default App