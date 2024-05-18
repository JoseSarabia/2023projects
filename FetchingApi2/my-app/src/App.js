import React from "react"
import FetchDataComponent from "./FetchDataComponent"
import "./App.css"



function App() {

  return(

    <div className="app">
      <h1 style={{color: "white", textDecoration: "underline"}}> Blog</h1>
        <h1>hello</h1>

        <div className="blog-card">
          <h2>BLog Post Title</h2>
          <p>Description of blog post</p>
          <button>Read More</button>
        </div>
        <FetchDataComponent/>
    </div>
  )
}


export default  App