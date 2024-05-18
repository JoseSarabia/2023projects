import {createContext, useContext, useEffect} from "react"

import {
    getPostsRequest,
    getSinglePost,
    deleteSinglePost,
    updateSingleRequest,
    createPostRequest
} from '../api/posts'

const postContext = createContext()
export const usePosts = ()=>{
    const context = useContext(postContext);
    if(!context)
    throw new Error('Post provider missing')
}

export const postProvider = ({children}) =>{
const [posts, setPosts] = useState([]);

useEffect(()=>{
    (async () => { 
        const res = await getPostsRequest();
        setPosts(res.data)
    })()
}, [])

}