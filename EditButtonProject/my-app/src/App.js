import React, {useState} from "react"

import Post from "./Post"


function App(props) {
  
  const [blogPosts, setBlogPosts] = useState([

   
   {
     title: "Title 1",
    description: "Description 1"
   },
   {
    title: "Title 1",
   description: "Description 2"
  },
  {
    title: "Title 1",
   description: "Description 3"
  }

  ])

  const updateBlogItem = (id, updatedItem) => {

    setBlogPosts( prevBlogPosts => {
     return prevBlogPosts.map((item, index) => {
        if (index === id) {
    return updatedItem
  }   
  else  {
    return item
  }

})

    })

  }

  const list =blogPosts.map((post, index ) => <Post key= 
  {index+post.title}  
  title={post.title} 
   description={post.description}
   updateBlogItem={updateBlogItem}
   id={index}
   />)


  return(


    <div>

      {list}

    </div>
  )
}

export default App 