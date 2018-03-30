import React, { Component } from 'react';

import RegisterationForm from './RegisterForm';
import '../css/App.scss';


class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="form">
          <RegisterationForm/>
        </div>
      </div>
    )
  }
}

export default App;