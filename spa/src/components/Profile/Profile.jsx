import React from 'react';
import cl from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    console.log('props f', props);
    return(
        <div className={cl.content}>
            <ProfileInfo />
            <MyPosts posts={props.state.posts}/>
        </div>
    )
};

export default Profile