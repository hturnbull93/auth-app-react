import React, { Component } from "react";
import axios from "axios";

export class Auth extends Component {
  constructor(props) {
    super(props);

    let regMode = this.props.target === "registrations";

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      error: false,
      regMode: regMode,
      errorMessage: regMode
        ? "That email is already taken"
        : "Incorrect email or password",
      buttonText: regMode ? "Register" : "Log in",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, password_confirmation } = this.state;

    axios
      .post(
        "http://localhost:3001/" + this.props.target,
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
        if (res.data.status === "created") this.props.handleAuth(res.data);
        else this.setState({ error: true });
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
    let passwordConfirmation = this.state.regMode ? (
      <input
        type="password"
        name="password_confirmation"
        value={this.state.password_confirmation}
        onChange={this.handleChange}
        required
      />
    ) : null;
    let passwordConfirmationLabel = this.state.regMode ? (
      <label htmlFor="password_confirmation">Password Confirmation</label>
    ) : null;

    return (
      <div>
        <h3>{this.state.error ? this.state.errorMessage : null}</h3>
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

          {passwordConfirmationLabel}
          {passwordConfirmation}
          <button type="submit">{this.state.buttonText}</button>
        </form>
      </div>
    );
  }
}

export default Auth;
