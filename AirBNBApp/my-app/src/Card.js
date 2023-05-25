import React from "react"


function Card(props)  {


    return (


        <div className="card">
            <img  src={`https://images.pexels.com/photos/1995783/pexels-photo-1995783.jpeg?auto=compress&cs=tinysrgb&w=400{props.img}`}  className="lakeGirl"/>
            <div className="cardStats">
                
                
                <span>{props.rating}</span>
                <span>  ({props.reviewCount}) </span>
                <span>{props.location}</span>
             </div>
                <p> {props.title}</p>
             <p><span className="bold"> From ${props.price}</span> / person</p>

        </div>
    )
        



    
}

export default Card;