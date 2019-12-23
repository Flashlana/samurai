import React from 'react';
import cl from './Post.module.css'

const Post = () => {
    return (
        <div>
            <div className={cl.item}>
                <img src='https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg' />
                post 1
            </div>
            <div >
                <span>
                    like
                </span>
            </div>
        </div>
    )
}

export default Post