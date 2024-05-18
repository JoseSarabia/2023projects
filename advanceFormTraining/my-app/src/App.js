import React, {useState} from "react"


function App() {

  const [inputFields, setInputFields] = useState([

    {name: "", age: ""}

  ])

  const handleFormChange = () => {

  }

  return(

      <div  className="App">
        <form>
          {inputFields.map((input, index) => {

          return(
          
          <div  key={index}>
            <input
              name="name"
              placeholder= "name"
              value={input.name}
              onChange={event => handleFormChange(index, event)}
            />

            <input
            name="age"
            placeholder="age"
            value={input.age}
            onChange={event => handleFormChange(index, event)}
            />
          </div>

          )
        })}
        </form>


      </div>


  )
}

export default App