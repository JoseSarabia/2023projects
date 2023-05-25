import React from "react"
import Navbar from "./Navbar"
import stlyesheet from "./stylesheet.css"
import Hero from "./Hero"
import Card from "./Card"
import data from "./data"

function App() {


   const cards = data.map(item => {
    
    return (
      <Card 
         key={item.id}
        item={item}
        />
    )
   })



  return (
      <div>
        <Navbar/>
        <Hero/>
        <section className="cards-list">

        {cards}
        </section>
      </div>  
  )
}

export default App;
