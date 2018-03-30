import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';

import '../css/Register.scss';

class RegisterationForm extends Component {
  render() {
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
              <input type="text" name="firstName" placeholder="First Name" />
            </div>
            <div className="form-fields">
              <span><FontAwesome.FaUser /></span>
              <input type="text" name="lastName" placeholder="Last Name"/>
            </div>
            <div className="form-fields">
              <span><FontAwesome.FaMapMarker /></span>
              <input type="text" name="pin" placeholder="Zip Code"/>
            </div>
            <div className="form-fields">
              <span><FontAwesome.FaEnvelope /></span>
              <input type="text" name="email" placeholder="Email"/>
            </div>
            <div className="form-fields">
              <span><FontAwesome.FaUser /></span>
              <input type="text" name="username" placeholder="Username"/>
            </div>
            <div className="form-fields">
              <span><FontAwesome.FaUnlockAlt /></span>
              <input type="text" name="password" placeholder="Password"/>
            </div>
            <div className="form-fields">
              <span><FontAwesome.FaLock /></span>
              <input type="text" name="confirmpassword" placeholder="Confirm Password"/>
            </div>
            <div className="condition">
              <p>By registering you agree to<br/> our <b>Terms</b> and <b>Privacy Police</b></p>
            </div>
            <div className="register-button">
              <button className="submit">Register</button>
            </div>
          </form>
        </section>
      </React.Fragment>
    )
  }
}

export default RegisterationForm;
