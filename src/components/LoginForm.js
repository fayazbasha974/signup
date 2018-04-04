import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

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
              autoLoad={true}
              fields="name,email,picture"
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
        </section>
      </React.Fragment>
    )
  }
}

export default LoginForm;