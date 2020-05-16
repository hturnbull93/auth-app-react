import React, { Component } from "react";
import Axios from "axios";

export class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  handleLogOut = () => {
    Axios.delete('http://localhost:3001/logout', { withCredentials: true })
    this.props.history.push('/')
    this.props.handleLogOut();
  };

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <section>
          <h2>User Details</h2>
          <p>Email:</p>
          <p>{this.props.user.email}</p>
          <p>Account Created At:</p>
          <p>{this.props.user.created_at}</p>
        </section>
        <button onClick={this.handleLogOut}>Log out</button>
      </div>
    );
  }
}

export default Dashboard;
