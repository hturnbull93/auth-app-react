import React, { Component } from "react";
import axios from "axios";

export class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, password_confirmation } = this.state;

    axios
      .post(
        "http://localhost:3001/registrations",
        {
          user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation,
          },
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log("res", res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <label htmlFor="password_confirmation">Password Confirmation</label>
          <input
            type="password"
            name="password_confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Registration;
