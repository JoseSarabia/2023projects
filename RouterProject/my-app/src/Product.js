import React from "react"
import { Link, useNavigate } from "react-router-dom"
import productData from "./productData"


function Product() {

    const navigate=useNavigate()

    const products = productData.map(product =>  (
        <h1 key={(product._id)}>
            <Link to={`/products/${product._id}`}>{product.name}</Link> - ${product.price}
        </h1>

    ))



        return (

        <div style={{padding:20}}>
            <h2>Product -2</h2>

            <p>Let me tell you about this Product</p>

            <button onClick={() => navigate("/checkout")}>Checkout</button>
            <button onClick={() => navigate("/")}>Return to Home</button>
            <button onClick={() => navigate(-1)}> Go Back One</button>
            <button onClick={() => navigate(1)}>Go Forward</button>


            <div>
                <h1>
                    Products List Page
                </h1>
                {products}
            </div>



        </div>

    )
}

export default Product



