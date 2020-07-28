import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://yt3.ggpht.com/a/AATXAJyZcXlLOhBLXh1c6UvHSz62WGhkRyju9z7N9MekbA=s900-c-k-c0xffffffff-no-rj-mo" alt="" />
            <div>{props.post}</div>
            <div>{props.likes} likes</div>
        </div>
     );
}

export default Post;