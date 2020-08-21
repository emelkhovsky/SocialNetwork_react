import React from "react";
import s from './AvaInfo.module.css'
import Preloader from './../../Preloader/Preloader'

const AvaInfo = (props) => {
    if (!props.profile){
        return <Preloader />
    }
    
    return (
        <div>
            <div className={s.profile_image}>
                <img src="https://mskmebel.net/wp-content/uploads/2017/06/1361641418_brooklyn-bridge-in-night-1.jpg" alt="" />
            </div>
            <div className={s.ava}>
                <img src={props.profile.photos.large} alt=""/>
            </div>
            <div className={s.info}>
                <div className={s.name}>
                    {props.profile.fillName}
                </div>
                <div className={s.info}>
                    <h3>Status: </h3> {props.profile.aboutMe}
                    <h3>My github: </h3> {props.profile.contacts.github}
                </div>
            </div>
        </div>
    );
}

export default AvaInfo;