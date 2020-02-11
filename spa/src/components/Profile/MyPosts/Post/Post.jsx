import React from 'react';
import cl from './Post.module.css'

const Post = (props) => {
    return (
        <div className={cl.post}>
            <div className={cl.item}>
                <img src='https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg' alt={'фото учаcтника'}/>
                {props.message}
            </div>
            <div >
                <span className={cl.countLike}>
                    &#10084;{props.count}
                </span>
            </div>
        </div>
    )
}

export default Post