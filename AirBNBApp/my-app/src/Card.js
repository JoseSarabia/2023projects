import React from "react"


function Card(props)  {


    return (


        <div className="card">
            <img  src={`${props.item.coverImg}`} className="card--image"/>
            <div className="cardStats">
                <span>{props.item.rating}</span>
                <span>  ({props.item.reviewCount}) </span>
                <span>{props.item.location}</span>
             </div>
                <p> {props.item.title}</p>
             <p><span className="bold"> From ${props.item.price}</span> / person</p>

        </div>
    )
        



    
}

export default Card;