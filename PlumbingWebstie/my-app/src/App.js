import React from "react"
import { Routes, Route, Link} from "react-router-dom";
import Plumbing from "./Plumbing.js"
import About from "./About.js"
import sink from "./projects/photos/pexels-photo-1080721.jpg"
import Careers from "./Careers"

function App() {

  return(

    <div   >
      

    <nav style={{margin: 0  , backgroundImage:`url(${sink})` , backgroundRepeat: "no-repeat", backgroundSize: "cover",  padding: 7 
       }}>
    <Link to= "/plumbing" style = {{padding : 25 }} >
    Home 
    </Link>

    <Link to="/about" style={{padding:25}}>
      About
    </Link>

    <Link to ="/careers" style={{padding:25}}> 
    Careers 
    
    </Link>


    </nav>
    
      <Routes>
        <Route path="/plumbing" element = {<Plumbing/>}/>
        <Route path= "/about" element={<About/>}/>
        <Route path= "/careers"  element={<Careers/>}/>
      </Routes>
    

    </div>

  )
}

export default App