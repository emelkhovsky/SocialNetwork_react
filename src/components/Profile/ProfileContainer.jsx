import React from "react";
import { connect } from "react-redux";
import {set_user_profile} from './../../redux/profileReducer'
import Profile from './Profile'
import axios from "axios";
import {withRouter} from 'react-router-dom'

class ProfileClassComponent extends React.Component{

    componentDidMount(){
        let userId = 2;
        if (this.props.match.params.userId){
            userId = this.props.match.params.userId;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        .then(response => {
            this.props.set_user_profile(response.data);
        })
    }

    componentDidUpdate(){

    }

    render(){
        return <Profile {...this.props} profile={this.props.profile}/>;
    }
}

const mapStateToProps = (state) => {
    return{
        profile:state.profilePage.profile
    }

};

let withUrlDataContainerComponent = withRouter(ProfileClassComponent);

export default connect(mapStateToProps, {set_user_profile})(withUrlDataContainerComponent);