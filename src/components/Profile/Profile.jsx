import React from "react";
import s from './Profile.module.css'
import PostsContainer from "./Posts/PostsContainer";
import AvaInfo from "./AvaInfo/AvaInfo";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <AvaInfo profile={props.profile}/>
            <PostsContainer/>
        </div>
    );
}

export default Profile;