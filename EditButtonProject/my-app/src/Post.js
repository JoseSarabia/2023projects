import React, { useState } from "react"


function Post(props) {

    const [showForm, setShowForm] = useState(false)

    const [ postInputs, setPostInputs]  = useState({
        title : "",
        description: ""
})

    const toggleShowForm = () => {
        setShowForm(prev => !prev)
    }

    const handleChange= (e) => {
        const {name, value} = e.target
        setPostInputs(prevState=> {
            return ({
                ...prevState,
                [name]: value
            })
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("fuck you")
        console.log(postInputs)
        props.updateBlogItem(props.id,  postInputs)
    }

    return(

        <div className="blog-post">
                {showForm ? 

                <form  onSubmit={handleSubmit}>
                
                <input 
                name= "title"
                value={postInputs.title}
                onChange={handleChange}
                />

                <input
                name= "description"
                value={postInputs.description}
                onChange={handleChange}
                />
                <button>Submit</button>
                </form>
                
                
                    :
                    <>
                <h2> {props.title}</h2>
                <p>{props.description}</p>
                    </>
                }
                <button onClick={toggleShowForm}> {showForm ? "Close" : "Edit"}</button>
                <button>hello</button>
        </div>
    )
}

 
export default Post