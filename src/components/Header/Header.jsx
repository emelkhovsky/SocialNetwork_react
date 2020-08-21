import React from "react";
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://i.pinimg.com/600x315/13/e3/43/13e34340ef2625f926ed799e68b1a7e2.jpg" alt="" />
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : 'anonymus'}
                <NavLink to="/login">Login</NavLink>
            </div>
        </header>
    );
}

export default Header;