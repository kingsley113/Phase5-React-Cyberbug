import React, { Component } from "react";
import { Link } from "react-router-dom";
import RedirectIfLoggedIn from "../../components/auth/redirectIfLoggedIn";
import LoginForm from "../../components/forms/loginForm";

class LoginPage extends Component {
  render() {
    return (
      <RedirectIfLoggedIn>
        <div>
          <LoginForm />
          <Link to="/signup">
            <button id="create-account">Create Account</button>
          </Link>
        </div>
      </RedirectIfLoggedIn>
    );
  }
}

export default LoginPage;
// TODO: Add styling
// TODO: Could this be a simple component rather than a class?
