import React from "react"
import { BrowserRouter as  Router, Routes, Route , Link} from "react-router-dom";
import Home from "./Home.js"
import About from "./About.js"
import Product from "./Product.js";
import Checkout from "./Checkout.js";
import ProductDetails from "./ProductDetails.js";






function App() {

  return(




    <Router>

    <nav style={{margin: 10}}> 

<Link to="/" style={{padding: 5}}>
Home
</Link>
<Link to="/about" style={{padding: 5}}>
About
</Link>

<Link to="/product" style={{padding: 5}}>
  Product

</Link>

<Link to="/checkout" style={{padding: 5}}>
  Checkout
</Link>

</nav>
      
      <Routes>
        <Route  path="/"  element= {<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/product"  element={<Product/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>


        
      </Routes>
    </Router>



  )
}

export default App