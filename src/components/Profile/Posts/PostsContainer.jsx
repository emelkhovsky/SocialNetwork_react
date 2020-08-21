import React from "react";
import Posts from './Posts'

import {connect} from 'react-redux';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

let mapStateToProps = (state) =>{
    return {
        newposttext:state.profilePage.newposttext,
        profile:state.profilePage.profile,
        posts:state.profilePage.posts
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