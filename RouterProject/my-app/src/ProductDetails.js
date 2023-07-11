import React from "react"
import { useParams } from "react-router-dom"
import productData from "./productData"



function ProductDetail() {


  
    
      const {id} = useParams()

      

    

    const foundProduct = productData.find(product => product._id === id)
 
    


    return(
        <div>
            
            <h1>Product Detail Page</h1>
            <h2>{foundProduct.name }= ${foundProduct.price} </h2>
            <p>{foundProduct.description}</p>
        </div>
    )
}

export default ProductDetail