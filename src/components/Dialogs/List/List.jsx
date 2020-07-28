import React from "react";
import s from './List.module.css'
import {NavLink} from "react-router-dom";

const List = (props) => {
    return (
        <div className={s.item}>
            <NavLink to={'/dialogs/' + props.dialogname} activeClassName={s.active}>
                {props.dialogname}
            </NavLink>
        </div>
    );
}

export default List;