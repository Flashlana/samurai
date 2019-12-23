import React from 'react';
import cl from './Post.module.css'

const Post = (props) => {
    const countLike =  `like ${props.count}`;
    return (
        <div>
            <div className={cl.item}>
                <img src='https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg' />
                props.message
            </div>
            <div >
                <span>
                    {countLike}
                </span>
            </div>
        </div>
    )
}

export default Post