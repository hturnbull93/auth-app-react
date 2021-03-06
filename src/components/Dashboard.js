import React, { Component } from "react";
import Axios from "axios";
import Moment from "moment";

export class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  handleLogOut = () => {
    Axios.delete("http://localhost:3001/logout", { withCredentials: true })
      .then(() => {
        this.props.handleLogOut();
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <section>
          <h2>User Details</h2>
          <p>Email:</p>
          <p>{this.props.user.email}</p>
          <p>Account Created On:</p>
          <p>
            {Moment(this.props.user.created_at).format(
              "dddd, MMMM Do YYYY, h:mm:ss a"
            )}
          </p>
        </section>
        <button onClick={this.handleLogOut}>Log out</button>
      </div>
    );
  }
}

export default Dashboard;
