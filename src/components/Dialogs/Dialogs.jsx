import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import List from "./List/List";

const Dialogs = (props) => {
    let new_dialog_list = props.dialog.dialog_list.map(el => (<List dialogname={el.name}/>));
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {new_dialog_list}
            </div>

            <div className={s.dialog}>
                <Message message="hello)"/>
                <Message message="hello!"/>
                <Message message="you're a cat!"/>
                <Message message="you're too!!"/>
            </div>
        </div>
    );
}

export default Dialogs;