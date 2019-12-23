import React from 'react';
import smiley from './smiley.png';
import cl from './Header.module.css';

const Header = () => {
    return <header className={cl.header}>
        <div className={cl.header_smile}>
            <img  className={cl.header_smile__img} src={smiley} alt=''/>
        </div>
        <div className={cl.header_speakeasy}>sreakeasy</div>

</header>
};

export default Header