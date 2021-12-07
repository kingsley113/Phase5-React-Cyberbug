import React, { Component } from "react";
import LoginForm from "./forms/loginForm";
// import PageSidebar from "./pageSidebar";

class LoginScreen extends Component {
  // state = {
  //   username: "",
  //   password: "",
  // };

  // handleOnSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Inside handleOnSubmit function, Form would be submitted");
  // };

  // handleOnChange = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // };

  render() {
    return (
      <div>
        <LoginForm />
        {/* <form id="login-form" onSubmit={this.handleOnSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={this.handleOnChange}
            value={this.state.username}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={this.handleOnChange}
            value={this.state.password}
          />
          <input type="submit" />
        </form> */}
        <button id="create-account">Create Account</button>
      </div>
    );
  }
}

export default LoginScreen;
// TODO: Add styling
