import React from 'react';
import cl from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return(
        <div>
            <div>
                <img
                    src='https://enjoyenglish-blog.com/wp-content/uploads/2014/05/%D1%80%D0%B0%D0%B7%D0%BD%D0%B8%D1%86%D0%B0-%D0%BC%D0%B5%D0%B6%D0%B4%D1%83-speak-tell-talk.jpg'
                    alt=''/>
            </div>
            <div className={cl.description}>
                ava+description
            </div>
        </div>
    )
};

export default ProfileInfo