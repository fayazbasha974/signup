import React from "react";
import { Route } from "react-router-dom";
// Alerts
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';

import RegisterationForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import Dashboard from "./dashboard/dashboard";

import "../css/App.scss";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <div className="app">
          <div className="form">
            <RegisterationForm/>
            <LoginForm/>
          </div>
        </div> */}
        <Route exact path="/" component={LoginForm}/>
        <Route path="/signup" component={RegisterationForm}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Alert stack={{limit: 3}} timeout={5000} />
      </React.Fragment>
    )
  }
}

export default App;