import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import * as FontAwesome from 'react-icons/lib/fa';
import { Link } from 'react-router-dom';

import "../css/Login.scss";

class LoginForm extends Component {

    responseFacebook = (response) => {
      console.log(response);
    }

    responseGoogle = (response) => {
      console.log(response);
    }

    componentClicked = () => {

    };

  render() {
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
            <h3 className="title">Login with your credentials!!!</h3>
            <div className="input-field">
              <span className="icon"><FontAwesome.FaUser /></span>
              <input type="text" name="username" placeholder="Username"/>
            </div>
            <div className="input-field">
              <span className="icon"><FontAwesome.FaUnlockAlt /></span>
              <input type="text" name="password" placeholder="Password"/>
            </div>
            <div className="input-field">
              <button className="submit-button">Login</button>
            </div>
            <div className="nav-to-signup">
              <p>Not yet registered? <Link to="/signup">SIGN UP</Link></p>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default LoginForm;