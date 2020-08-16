import React from "react";
import * as axios from "axios";
import Users from './Users'

class UsersClassComponent extends React.Component {

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.set_users(response.data.items);     
            this.props.set_users_count(response.data.totalCount);
        });
    }

    change_page = (pageNumber) =>{
        this.props.change_page(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.set_users(response.data.items);     
        });
    }

    render(){
        return (
            <Users usersCount={this.props.usersCount} 
            pageSize={this.props.pageSize} 
            change_page={this.change_page}
            currentPage={this.props.currentPage}
            users={this.props.users}
            remove_user={this.props.remove_user}
            add_user={this.props.add_user}
            />
        );
    }
}

export default UsersClassComponent;