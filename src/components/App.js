import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import RegisterationForm from './RegisterForm';
import '../css/App.scss';
import LoginForm from './LoginForm';

class App extends Component {
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
      </React.Fragment>
    )
  }
}

export default App;