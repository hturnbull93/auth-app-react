import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import { Dashboard } from "./Dashboard";
import Axios from "axios";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    };
  }

  checkLoginStatus = () => {
    Axios.get("http://localhost:3001/logged_in", { withCredentials: true })
      .then((res) => {
        if (res.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN")
          this.handleAuth(res.data);
        else if (
          !res.data.logged_in &&
          this.state.loggedInStatus === "LOGGED_IN"
        )
          this.setState({ user: {}, loggedInStatus: "NOT_LOGGED_IN" });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  handleAuth = (data) => {
    this.setState({
      user: data.user,
      loggedInStatus: "LOGGED_IN",
    });
  };

  componentDidMount() {
    this.checkLoginStatus();
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={"/"}
              render={(props) => (
                <Home {...props} handleAuth={this.handleAuth} />
              )}
            />

            <Route
              exact
              path={"/dashboard"}
              render={(props) => (
                <Dashboard {...props} user={this.state.user} />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
