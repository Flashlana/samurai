import React from 'react';
import Post from './Post/Post'
import cl from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <div className={cl.posts}>
                <Post/>
            </div>

        </div>
    )
}

export default MyPosts