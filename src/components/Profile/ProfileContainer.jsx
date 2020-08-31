import React from "react";
import { connect } from "react-redux";
import {set_user_profile} from './../../redux/profileReducer';
import Profile from './Profile';
import {withRouter} from 'react-router-dom';
import {usersAPI} from './../../api/api'

class ProfileClassComponent extends React.Component{

    componentDidMount(){
        let userId = 2;
        if (this.props.match.params.userId){
            userId = this.props.match.params.userId;
        }
        usersAPI.getProfile(userId).then(data => {
            this.props.set_user_profile(data);
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