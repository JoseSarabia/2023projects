import React  , {useState} from "react"
import memesData from "./memesData"



function Meme() {

        const [meme, setMeme] = useState({
            topText: "",
            bottomtext:"",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        })

        const [allMemeImages, setAllMemeImages] = useState(memesData)

        function getMemeImage() {
            const memesArray = allMemeImages.data.memes
            const randomNumber= Math.floor(Math.random() * memesArray.length)
            const url = memesArray[randomNumber].url
            setMeme(prevMeme =>({
                ...prevMeme,
                randomImage: url
            }))
        }

        function handleSubmit(event) {
            event.preventDefault()
            setMemelist(prevMeme => {
                return{
                ...prevMeme,
                topText:"",
                bottomtext:"",
                badeArr:[...prevMeme.badgeArr, {...prevMeme}]
                }
            })

        }


    return(

        <main>


        <div>
            <input
            type="text"
            placeholder="Top Text"
            className="form--input"
            />

            <input 
            type="text"
            placeholder="Bottem Text"
            className="form--input"
            />

            <button  onClick={getMemeImage} className="form--button">Get a new meme image</button>
            <button onClick={handleSubmit}  className="form--button">Submit</button>
            


        </div>

         <img src={meme.randomImage}  className="meme--image"/>
                 </main>
    )
}

export default Meme