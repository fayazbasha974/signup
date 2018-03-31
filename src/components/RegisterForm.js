import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';

import '../css/Register.scss';

class RegisterationForm extends Component {
  constructor(){
    super();
    this.state = {
      firstName: "",
      lastName: "",
      pin: "",
      email: "",
      username: "",
      password: "",
      confirmpassword: ""
    };
  }
  
  inputChanged = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const errors = false;

    return (
      <React.Fragment>
        <section>
          <div className="heading">
            <h1>Register</h1>
            <p>Join the community and improve your game <br />with <b>ANGLR</b></p>
          </div>
          <form>
            <div className="form-fields">
              <span><FontAwesome.FaUser /></span>
              <input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.inputChanged} autoComplete="firstName"/>
            </div>
            <div className="form-fields">
              <span><FontAwesome.FaUser /></span>
              <input type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.inputChanged} autoComplete="lastName"/>
            </div>
            <div className="form-fields">
              <span><FontAwesome.FaMapMarker /></span>
              <input type="tel" name="pin" placeholder="Zip Code" value={this.state.pin} onChange={this.inputChanged} autoComplete="pin"/>
            </div>
            <div className="form-fields">
              <span><FontAwesome.FaEnvelope /></span>
              <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.inputChanged} autoComplete="email"/>
            </div>
            <div className="form-fields">
              <span><FontAwesome.FaUser /></span>
              <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.inputChanged} autoComplete="username"/>
            </div>
            <div className="form-fields">
              <span><FontAwesome.FaUnlockAlt /></span>
              <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.inputChanged} autoComplete="password"/>
            </div>
            <div className="form-fields">
              <span><FontAwesome.FaLock /></span>
              <input type="text" name="confirmpassword" placeholder="Confirm Password" value={this.state.confirmpassword} onChange={this.inputChanged} autoComplete="confirmpassword"/>
            </div>
            <div className="condition">
              <p>By registering you agree to<br/> our <b>Terms</b> and <b>Privacy Police</b></p>
            </div>
            <div className="register-button">
              <button className="submit" disabled={errors}>Register</button>
            </div>
          </form>
        </section>
      </React.Fragment>
    )
  }
}

export default RegisterationForm;
