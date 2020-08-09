import React from "react";
import s from './Profile.module.css'
import PostsContainer from "./Posts/PostsContainer";
import AvaInfo from "./AvaInfo/AvaInfo";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <AvaInfo name={props.name} surname={props.surname} age={props.age} sex={props.sex} city={props.city} />
            <PostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;