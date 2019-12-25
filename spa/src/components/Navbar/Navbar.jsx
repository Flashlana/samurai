import React from 'react';
import cl from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import SiderBar from "./SiderBar/SiderBar";

const Navbar = (props) => {

    return <nav className={cl.nav}>
        <div className={cl.item}>
            <NavLink to='/profile' activeClassName={cl.activeLink}>Profile</NavLink>
        </div>
        <div className={cl.item}>
            <NavLink to='/dialogs' activeClassName={cl.activeLink}>Message</NavLink>
        </div>
        <div className={cl.item}>
            <NavLink to='/news' activeClassName={cl.activeLink}>News</NavLink>
        </div>
        <div className={cl.item}>
            <NavLink to='/music' activeClassName={cl.activeLink}>Music</NavLink>
        </div>
        <div className={cl.item}>
            <NavLink to='/settings' activeClassName={cl.activeLink}>Settings</NavLink>
        </div>
        <div className={cl.itemFriends}>
            <NavLink to='/settings' activeClassName={cl.activeLink}>Friends</NavLink>
            <SiderBar siderBar={props.siderBar}/>
        </div>
    </nav>
};

export default Navbar