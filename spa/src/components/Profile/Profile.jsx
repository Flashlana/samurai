import React from 'react';
import cl from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return(
        <div className={cl.content}>
            <ProfileInfo />
            <MyPosts posts={props.profile.posts}
                     newPostText={props.profile.newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
};

export default Profile