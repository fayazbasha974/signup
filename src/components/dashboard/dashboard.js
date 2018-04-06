import React from "react";

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
      </div>
    )
  }
}

export default Dashboard;
