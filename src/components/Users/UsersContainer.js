import React from "react";
import {connect} from 'react-redux'
import {add_user, remove_user, set_users, change_page, set_users_count, is_loading} from './.././../redux/usersReducer'
import * as axios from "axios";
import Users from './Users'
import Preloader from './../Preloader/Preloader'


class UsersClassComponent extends React.Component {

    componentDidMount(){
        this.props.is_loading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials:true,
        })
        .then(response => {
            this.props.set_users(response.data.items);     
            this.props.set_users_count(response.data.totalCount);
            this.props.is_loading(false);
        });
        
    }

    change_page = (pageNumber) =>{
        this.props.change_page(pageNumber);
        this.props.is_loading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials:true,
        })
        .then(response => {
            this.props.set_users(response.data.items); 
            this.props.is_loading(false);    
        });
    }

    render(){
        return (<>
            {this.props.isLoading ? <Preloader isLoading={this.props.isLoading}/> : null}
            <Users usersCount={this.props.usersCount} 
            pageSize={this.props.pageSize} 
            change_page={this.change_page}
            currentPage={this.props.currentPage}
            users={this.props.users}
            remove_user={this.props.remove_user}
            add_user={this.props.add_user}
            />
        </>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        usersCount:state.usersPage.usersCount,
        currentPage:state.usersPage.currentPage,
        isLoading:state.usersPage.isLoading,
    }
}

export default connect(mapStateToProps, {add_user, remove_user, set_users, change_page, set_users_count, is_loading})(UsersClassComponent);