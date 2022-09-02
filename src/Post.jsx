import React from 'react';

const Post = (props) => {

   const {post: {title, body}} = props;
    return (
        <div className='post'>
            <div className='post-title'>{title}</div> 
            <div>{body}</div> 
        </div>
  )
}

export default Post;
