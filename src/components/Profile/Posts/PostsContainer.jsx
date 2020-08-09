import React from "react";
import Posts from './Posts'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

const PostsContainer = (props) => {
    let addPostContainer = () => {
        props.store.dispatch(addPostActionCreator());
    };
    let onPostChangeContainer = (text) =>{
        props.store.dispatch(updateNewPostTextActionCreator(text));
    };

    let new_posts = props.store.getState().profile.posts.map(el => (<Post post={el.post} likes={el.likes}/>));
    return (
        <Posts addPostContainer={addPostContainer} 
        onPostChangeContainer={onPostChangeContainer} 
        profile={props.store.getState().profile} 
        newposttext={props.store.getState().profile.newposttext}
        new_posts={new_posts}/>
     );
}

export default PostsContainer;