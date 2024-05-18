import React , {useState} from "react"


function Meme() {


    const [meme, setMeme] = useState({
        topText: "",
        bottomText:"",
         randomImage:  "http://i.imgflip.com/1bij.jpg"
  })


  const [allMemes, setAllMemes] = React.useState([])
    
  React.useEffect(async () => {
    const res = await fetch("https://api.imgflip.com/get_memes")
    const data = await res.json()
    setAllMemes(data.data.memes)
}, [])


  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
    
}



  function handleChange(event) {

    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme, 
        [name]: value
    }))
  }

    return(

        <div>
            <main>
                <div>
                    <input
                    type= "text"
                    placeholder="TopText"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onchange={handleChange}
                     />

                     <input
                     type = "text"
                     placeholder="bottomeText"
                     className="form--input"
                     name="bottomText"
                    value={meme.bottomText}
                    onchange={handleChange}

                    />


                    <button>Get a new image</button>
                </div>


                <div>
                    <h2>{meme.topText}</h2>
                </div>
            </main>


        </div>
    )
}

export default Meme