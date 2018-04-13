import React from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

import userDetails from "./UserDetails";

class Dashboard extends React.Component {
  componentWillMount(){
    if(!localStorage.getItem("userDetails")){
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div>
        <h1>Welcome to dashboard</h1>
        <Route path={this.props.match.url+"/userdetails"} component={userDetails}/>
      </div>
    )
  }
}

export default withRouter(Dashboard);
