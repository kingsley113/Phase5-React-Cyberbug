import React, { Component } from "react";
import RedirectIfLoggedIn from "../../components/auth/redirectIfLoggedIn";
import NewUserForm from "../../components/forms/newUserForm";

class NewUserPage extends Component {
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
            <h1>Create A New Account</h1>
            <NewUserForm />
          </div>
        </div>
      </RedirectIfLoggedIn>
    );
  }
}

export default NewUserPage;
