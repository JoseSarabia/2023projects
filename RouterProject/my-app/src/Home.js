import React from "react"
import { useNavigate } from "react-router-dom"


function   Home()  {
    const navigate = useNavigate()


    return(

        <div style={{padding: 20}}>
        <h2> Home View</h2>

        <p> 
            This is the Homet link . WHich is tell me about the subject
        </p>
        <button onClick={() => navigate("/product")}>Go to Products page</button>
        <button onClick={() => navigate("/checkout")}>Go to Checkout page</button>
        <button onClick={() => navigate(-1)}>Go Back 1</button>
        <button onClick={() => navigate(1)}>GO Forward 1</button>
        <button onClick={() => navigate(2)}> GO Forward 2</button>


    </div>

    )
}

export default Home
  