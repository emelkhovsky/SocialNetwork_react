import React from "react";
import s from './Posts.module.css'
import Post from "./Post/Post";

const Posts = (props) => {

    let new_posts = props.posts.map(el => (<Post post={el.post} likes={el.likes}/>));

    return (
        <div>
            <div>My posts</div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {new_posts}
            </div>
        </div>
     );
}

export default Posts;