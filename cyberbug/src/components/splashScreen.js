import React, { Component } from "react";

class SplashScreen extends Component {
  render() {
    return (
      <div>
        <form id="login-form">
          <label for="username">Username:</label>
          <input type="text" name="username" id="username" />
          <label for="password">Password:</label>
          <input type="password" name="password" id="password" />
          <input type="submit" />
        </form>
        <button id="create-account">Create Account</button>
      </div>
    );
  }
}

export default SplashScreen;
