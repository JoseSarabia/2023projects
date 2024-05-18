import React , {useEffect, useState} from "react"



function FormData() {


    const [info, setinfo] = useState({
   
        title: "",
        description:"",
        uglyImg:""

   }
    )
//    1. postman, get request to get all uglything posted
// 2. wrtie request in my app (getrequest).
//    set the state is in the reponse of the request/(.then)
// 3.map over state to put on pageXOffset.map has to be done on an a
rray 
    const [infolist, setInfoList] = useState([]);
    const [allUglyImages, setAllUglyImgages] = useState([])


     useEffect(() => {
        async function getUglyImg()  {

            const rest = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
        }
        getUglyImg();
     }, [])


      function getUglyImg()  {
        const randomNumber = Math.floor(Math.random() * allUglyImage0s.length) ;
        const url = allUglyImages[randomNumber].url;
        setInfo((prevInfo) => ({
            ...prevInfo, 
            random:url
        }))
      }


    //  function onChange(index, event) {
    //     const {name, vaule} = event.target;
    //     setinfo((prev))


        function handleChange ( event)  {
            const{name, value} = event.target;
            setInfo((prevInfoList) => ({
                ...prevInfoList,
                [name]: value
            }))
         
     }

    return(
        <div>
            <form>
                {/* {info.map((info, index) =>{ */}

                return(
                    <div key={index}>
                        <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={info.info}
                        onChange={handleChange}
                        
                        />
                        
                        <input
                        type="text"
                        placeholder="Description"
                        name="description"
                        value={info.description  }
                        onChange={handleChange}

                        />

                        <input
                        type="text"
                        placeholder="Image"
                        name="getUglyImg"
                        onChange={handleChange}
                        />


                       <div >
                            <img src={info.randomImage} alt="uglyImagePic" />
                        </div>


                        <div>
                            

                            {info.map((info)=>(
                                <h2>{info.title}</h2>
                                
                                ))}
                         <h3>{info.description}</h3> 
                                

                        </div>

                        
                         

                        <button onClick ={getUglyImg}style={{color:"red" , background:"green"}}> Click Me</button>
                    </div>

                        

                      )
                  
                        
                 
                    
                </form>
        
            </div>

    
    )
}

export default FormData