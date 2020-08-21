import React from "react";
import s from './Preloader.module.css'
import load_animation from './../../static/images/loading.svg'

const Preloader = (props) => {
    return (
        <div className={s.preloader}>
            {props.isLoading ? <img src={load_animation}/> : null}
        </div>

    );
}

export default Preloader;