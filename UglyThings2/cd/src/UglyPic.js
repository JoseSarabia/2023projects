import React,  {useState} from "react"



function UglyPic() {

    const [setpicture, setPicture] = useState={
        Title: "",
        Descritpion: "",
        ImgUrl: ""
    }




    return (

        <div>
        <h1> hello </h1>
        <input
        type="text"
        placeholder="Title"
        name="Title"
        />

        <input
        type="text"
        placeholder="description"
        name="Description"
        />

        <button> Click</button>


        </div>
    )
}

export default UglyPic