import React from 'react';
import Post from './Post/Post'
import cl from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <div className={cl.posts}>
                <Post
                    message='Hello? how are you?'
                    count={10}
                />
                <Post
                    message='I am fine and you'
                    count={20}
                />
            </div>

        </div>
    )
}

export default MyPosts