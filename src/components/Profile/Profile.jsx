import React from "react";
import s from './Profile.module.css'
import Posts from "./Posts/Posts";
import AvaInfo from "./AvaInfo/AvaInfo";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <AvaInfo name={props.name} surname={props.surname} age={props.age} sex={props.sex} city={props.city} />
            <Posts profile={props.store.getState().profile} dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;