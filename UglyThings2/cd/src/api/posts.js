import axios from "axios";
const url = "https://api.vschool.io/"
export const getPostsRequest = async () => await axios.get(`${url}/jose/thing`)

export const getSinglePost = async (id) => await axios.get(`${url}/jose/thing/${id}`)

export const createPostRequest = async (post) =>{
const form = new FormData();
for(let key in post){
    form.append(key, post[key])
}

 return await axios.post(`${url}/jose/thing`, form, {
    headers: {
        "Content-Type": "multipart/form-data"
    }
 })
}

export const deleteSinglePost = async (id) => await axios.delete(`${url}/jose/thing/${id}`)

export const updateSingleRequest = async (id, newPostFields) =>{
    const form = new FormData();
    for(let key in newPostFields){
        form.append(key, newPostFields[key])
    }
    
     return await axios.put(`${url}/jose/thing/${id}`, form, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
     })
    }
