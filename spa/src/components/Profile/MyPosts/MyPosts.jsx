import React from 'react';
import Post from './Post/Post'
import cl from './MyPosts.module.css'

const MyPosts = (props) => {
    let postsElement = props.posts.map(post => <Post message={post.message} id={post.id} count={post.count}/>);
    let newPost = React.createRef();
    const addPost = () => {
        let text = newPost.current.value;
        props.addPost(text);
        newPost.current.value = '';
    };
    const onPostChange = () => {
        const text = newPost.current.value;
        props.updateNewPostText(text);
    };
    return (
        <div className={cl.myPostBlock}>
            <h3 className={cl.h3}>My posts</h3>
                <div >
                    <textarea  ref= {newPost} className={cl.newPost} onChange={onPostChange} value={pr.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost} className={cl.button}>Add post</button>
                </div>
            <div className={cl.posts}>
                {postsElement}
            </div>

        </div>
    )
};

export default MyPosts