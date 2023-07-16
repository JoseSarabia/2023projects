import React , {useState} from "react"


import Title from "./Title"
import {AiFillSmile, AiFillHeart, AiOutlineHeart, AiOutlineComment} from "react-icons/ai"
// import img from "./logo.svg"
import  godoggy from "./images/png-2702691_640.webp"


function LikePhotoApp()  {
    

    // let like = false

    const [like, setLike] = useState(false) 
    const [count, setCount] = useState(0)
    const toggleLike = () => {
        if (!like) {
            setLike(true)
            setCount(count + 1)
        }else {
            setLike(false)
            
        }
    }
    
  

    return(
        <div className="conatiner text center">

            <Title text = {"Like Photo App"}/>
            <Title classes={"subtitle"} text={`Likes ${count}`}  />

            <div className="card card-dark m-auto  shadow-md" style={{width:300, cursor: "pointer"}}>
                <div className="card-header fs-xl">
                    <AiFillSmile className="mr-2"/>
                     <small>
                    DogyDOg
                    </small>
                     </div>
                     <img src={godoggy} alt="img" style={{height: "fit-content"}}   onDoubleClick={toggleLike}></img>

                     <div className="card-footer fs-xl d-flex"
                     style={{justifyContent: "space-between"}}  >

                        <AiOutlineComment/>  {""}
                         {like ? (
                         <AiFillHeart className="text-danger"  onClick={toggleLike}/>
                         ) : (
                             <AiOutlineHeart onClick={toggleLike}
                         />)}

                     </div>
                </div>
               
          </div>     
    )
}

export default LikePhotoApp