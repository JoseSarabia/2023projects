import React from "react"
import useWordGame from "./wordGame"

import style from "./style.css"

function App() {
  
  const {
    timeRemaining,
    isTimeRunning,
    handleChange,
    startClock,
    textBoxRef,
    wordCount,
    text

   }  = useWordGame(5)

  return(

    <div>
      <br/>
      <h1> How fast do you type?</h1>

      <textarea  
      ref={textBoxRef}
      value={text}
      onChange={handleChange}
      disabled={!isTimeRunning}
      />
      <h4>Time is remaing : {timeRemaining} </h4>

      <button onClick={startClock}  disabled={isTimeRunning}>
        {wordCount > 0 ? "Play Again" : "Start"}
      </button>

      {wordCount > 0 && <h1> Word count : {wordCount}</h1>}

    </div>
  )
}

 
export default App