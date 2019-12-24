import React from 'react';
import Post from './Post/Post'
import cl from './MyPosts.module.css'

const MyPosts = (props) => {
    let postsElement = props.posts.map(post => <Post message={post.message} id={post.id} count={post.count}/>);
    return (
        <div className={cl.myPostBlock}>
            <h3 className={cl.h3}>My posts</h3>
                <div >
                    <textarea className={cl.newPost}></textarea>
                </div>
                <div>
                    <button className={cl.button}>Add post</button>
                </div>
            <div className={cl.posts}>
                {postsElement}
            </div>

        </div>
    )
}

export default MyPosts