import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/forms/loginForm";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <LoginForm />
        <Link to="/signup">
          <button id="create-account">Create Account</button>
        </Link>
      </div>
    );
  }
}

export default LoginPage;
// TODO: Add styling
// TODO: Could this be a simple component rather than a class?
