import React from "react";
import s from './Posts.module.css'
import Post from "./Post/Post";
import Preloader from './../../Preloader/Preloader'

const Posts = (props) => {
    
    if (!props.profile){
        return <Preloader />
    }
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPostContainer();
    };
    let onPostChange = (event) =>{
        let text = event.target.value;
        props.onPostChangeContainer(text);
    };
    let new_posts = props.posts.map(el => (<Post post={el.post} likes={el.likes}/>));
    return (
        <div>
            <div>My posts</div>
            <div>
                <textarea ref={newPostElement} value={props.newposttext} onChange={onPostChange}/>
                <button onClick={addPost} >Add post</button>
            </div>
            <div className={s.posts}>
                {new_posts}
            </div>
        </div>
     );
}

export default Posts;