import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import * as FontAwesome from "react-icons/lib/fa";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Login } from "../actions/LoginActions";

import "../css/Login.scss";

class LoginForm extends Component {
    constructor(){
      super();
      this.state = {
        username: "",
        password: "",
        usernameValid: false,
        passwordValid:false
      };
    }
    responseFacebook = (response) => {
      this.props.Login(response,"facebook",this.props);
    }

    responseGoogle = (response) => {
      this.props.Login(response,"google",this.props);
    }

    componentClicked = (response) => {
      console.log(response);
    };

    validationCheck = (name) => {
      let usernameValid = this.state.usernameValid;
      let passwordValid = this.state.passwordValid;
      if(name === "username") {
        usernameValid = this.state.username.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ? true : false;
      }else if(name === "password") {
        passwordValid = this.state.password.length >= 6 ? true : false;
      }
      
      this.setState({
        usernameValid: usernameValid,
        passwordValid: passwordValid
      });
    };

    handleChanges = (e) => {
      let name = e.target.name;
      this.setState({
        [e.target.name]: e.target.value
      },()=>{this.validationCheck(name)})
    };

    submit = (e) => {
      e.preventDefault();
      let payload = {
        email: this.state.username,
        password: this.state.password
      };
      this.props.Login(payload,"manual",this.props);
    };

  render() {
    const usernameValidation = this.state.username.length > 0 && !this.state.usernameValid;
    const passwordValidation = this.state.password.length > 0 && !this.state.passwordValid;
    return (
      <React.Fragment>
        <section>
          <div className="facebook-login">
            <FacebookLogin
              appId="578361512529751"
              autoLoad={false}
              fields="name,email,picture,gender,birthday"
              onClick={this.componentClicked}
              callback={this.responseFacebook} 
            />
          </div>
          <h5 className="or">(OR)</h5>
          <div className="google-login">
            <GoogleLogin
              clientId="568370007921-quq5m0dcdd79j8k3mjkodkji8f66m6d3.apps.googleusercontent.com"
              buttonText="Login with google"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
            />
          </div>
          <div className="manual-login">
            <form>
              <h3 className="title">Login with your credentials!!!</h3>
              <div className={"input-field" + " "+ (usernameValidation ? "errors" : "")}>
                <span className="icon"><FontAwesome.FaUser /></span>
                <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChanges}/>
              </div>
              <div className={"input-field" + " "+ (passwordValidation ? "errors" : "")}>
                <span className="icon"><FontAwesome.FaUnlockAlt /></span>
                <input type="password"  name="password" placeholder="Password" value={this.state.password} onChange={this.handleChanges}/>
              </div>
              {passwordValidation || usernameValidation ? 
                <div className="error-msg-section">
                    <span>{ usernameValidation ? "Invalid email id" : ""}</span><br/>
                    <span>{passwordValidation ? "Password should contain minimum of 6 characters" : ""}</span>
                </div>: ""
              }
              <div className="input-field">
                <button className="submit-button" onClick={this.submit} disabled={!this.state.passwordValid || !this.state.usernameValid}>Login</button>
              </div>
              <div className="nav-to-signup">
                <p>Not yet registered? <Link to="/signup">SIGN UP</Link></p>
              </div>
            </form>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

Login.propTypes = {
  Login: PropTypes.func
}

export default connect(null,{Login})(LoginForm);