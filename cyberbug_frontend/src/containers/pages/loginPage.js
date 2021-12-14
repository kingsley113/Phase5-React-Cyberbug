import React, { Component } from "react";
import { Link } from "react-router-dom";
import RedirectIfLoggedIn from "../../components/auth/redirectIfLoggedIn";
import LoginForm from "../../components/forms/loginForm";

class LoginPage extends Component {
  render() {
    return (
      <RedirectIfLoggedIn>
        <div className="full-page centered-flex transparent-background">
          <div className="centered-flex-vert">
            <img
              src="/cyberbugLogoQuick.png"
              alt="Cyberbug Logo"
              className="med-logo"
            />
            <div>
              <LoginForm />
              {/* <Link to="/signup">
                <button id="create-account" id="create-account-btn">
                  Create Account
                </button>
              </Link> */}
            </div>

            {/* <h1>Whoops, page not found!</h1> */}
            {/* <button onClick={() => window.history.back()} id="page-back-btn"> */}
            {/* Go Back to Safety! */}
            {/* </button> */}
          </div>
        </div>
      </RedirectIfLoggedIn>
    );
  }
}

export default LoginPage;
// TODO: Add styling
// TODO: Could this be a simple component rather than a class?
