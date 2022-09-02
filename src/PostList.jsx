import React, { useState, useEffect}from 'react'
import Post from './Post';
import axios from 'axios';


const PostList = () => {
  
    const [list, setList] = useState([]);

    const getList = async() => {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/1/posts')
         setList(data);
    }

    useEffect(()=> {
       getList();
    }, []);

    const renderPost = (post, index ) => {
        return(
            <Post key={index} post={post}/>
        )
    }
    return (
    <div>
      <h1>Post List</h1>
      {list.length > 0 && list.map(renderPost) }
    </div>
  )
}

export default PostList;
