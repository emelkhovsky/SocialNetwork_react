import React from "react";
import Posts from './Posts'
import Post from "./Post/Post";
import {connect} from 'react-redux';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

let mapStateToProps = (state) =>{
    debugger;
    let new_posts = state.profilePage.posts.map(el => (<Post post={el.post} likes={el.likes}/>));
    return {
        new_posts:new_posts,
        newposttext:state.profilePage.newposttext
    };
};

let mapDispatchToProps = (dispatch) =>{
    return {
        addPostContainer: () => {
            dispatch(addPostActionCreator());
        },
        onPostChangeContainer: (text) =>{
            dispatch(updateNewPostTextActionCreator(text));
        }
    };

};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;