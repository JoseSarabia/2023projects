import React from "react"

function Box(props) {

    const styles = {
        background: props.on ? "#222222" : "none"
    }

    return(

        <div  style={styles} className="box"></div>


    )

}


export default Box