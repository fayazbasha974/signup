import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import "../../css/UserDetails.scss";

 class UserDetails extends Component {
    constructor(){
        super();
        this.state = {
        userDetails : {}
        }
    };

    componentWillMount(){
        if(!localStorage.getItem("userDetails")){
            this.props.history.push("/");
        }else {
            this.state.userDetails = JSON.parse(localStorage.getItem("userDetails"))[0];
        }
    }
    render() {
        return (
            this.state.userDetails ?
            <div className="user-details">
                <div className="user-image">
                    <img src={this.state.userDetails.image}/>
                </div>
                <div className="personal-details">
                    <div className="user-name">
                        <label>Name: </label>
                        <span> {this.state.userDetails.firstname+ ' '+ this.state.userDetails.lastname}</span>
                    </div>
                    <div className="user-email">
                        <label>Email-ID: </label>
                        <span> {this.state.userDetails.email}</span>
                    </div>
                    <div className="user-mobile">
                        <label>Mobile number: </label>
                        <span> {this.state.userDetails.mobile}</span>
                    </div>
                </div>
            </div>:""
        )
    }
}

export default withRouter(UserDetails);