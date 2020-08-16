import React from "react";
import UsersClassComponent from './UsersClassComponent'
import {connect} from 'react-redux'
import {addAC, removeAC, setUsersAC, changePageAC, setUsersCountAC} from './.././../redux/usersReducer'

const mapStateToProps = (state) =>{
    return{
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        usersCount:state.usersPage.usersCount,
        currentPage:state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        add_user: (id) =>{
            dispatch(addAC(id));
        },
        remove_user: (id) =>{
            dispatch(removeAC(id));
        }, 
        set_users: (users) =>{
            dispatch(setUsersAC(users));
        },
        change_page: (pageNumber) =>{
            dispatch(changePageAC(pageNumber));
        },
        set_users_count: (count) =>{
            dispatch(setUsersCountAC(count));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassComponent)
export default UsersContainer;