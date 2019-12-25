import React from "react";
import cl from './SiderBar.module.css';
import SiderBarFriendPhoto from './SiderBarFriendPhoto/SiderBarFriendPhoto';

const SiderBar = (props) => {
    let siderBarPhotoElement = props.siderBar.map(elem =>
        <SiderBarFriendPhoto
            name={elem.name}
            photo={elem.photo}
        />);
    return (
        <div>
            {siderBarPhotoElement}
        </div>
    )
};

 export default SiderBar;
