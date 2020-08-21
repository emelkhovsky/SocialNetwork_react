import React from "react";
import { connect } from "react-redux";
import Header from './Header';
import {set_user_data} from './../../redux/authReducer';
import * as axios from "axios";

class HeaderClassComponent extends React.Component{

    componentDidMount(){
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true})
        .then(response => {
            alert(response.data.resultCode)
            if(response.data.resultCode === 0){
                let {userId, login, email} = response.data.data;
                this.props.set_user_data(userId, login, email);
            }
        })
    }

    render(){
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return{
        isAuth:state.auth.isAuth,
        login:state.auth.login,
    }
}

export default connect(mapStateToProps, {set_user_data})(HeaderClassComponent);