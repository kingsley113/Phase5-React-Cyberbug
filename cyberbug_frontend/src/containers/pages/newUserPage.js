import React, { Component } from "react";
import RedirectIfLoggedIn from "../../components/auth/redirectIfLoggedIn";
import NewUserForm from "../../components/forms/newUserForm";

class NewUserPage extends Component {
  render() {
    return (
      <RedirectIfLoggedIn>
        <NewUserForm />;
      </RedirectIfLoggedIn>
    );
  }
}

export default NewUserPage;
