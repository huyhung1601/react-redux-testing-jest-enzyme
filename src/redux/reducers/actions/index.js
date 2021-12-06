import axios from "axios";

export const fetchPosts = () => async (dispatch) =>{
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')        
        dispatch({
            type: 'GET_POSTS',
            payload: res.data
        })
    } catch (err) {
        console.log(err)
    }
 }