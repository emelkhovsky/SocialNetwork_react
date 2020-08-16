import React from "react";
import s from './AvaInfo.module.css'

const AvaInfo = (props) => {
    return (
        <div>
            <div className={s.profile_image}>
                <img src="https://mskmebel.net/wp-content/uploads/2017/06/1361641418_brooklyn-bridge-in-night-1.jpg" alt="" />
            </div>
            <div className={s.ava}>
                <img src="https://yt3.ggpht.com/a/AATXAJyZcXlLOhBLXh1c6UvHSz62WGhkRyju9z7N9MekbA=s900-c-k-c0xffffffff-no-rj-mo" alt=""/>
            </div>
            <div className={s.info}>
                <div className={s.name}>

                </div>
                <div className={s.info}>

                </div>
            </div>
        </div>
    );
}

export default AvaInfo;