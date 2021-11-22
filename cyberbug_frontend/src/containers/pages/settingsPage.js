import React, { Component } from "react";
import UserInfo from "../../components/settings/userInfo";
import UserForm from "../../components/settings/userForm";

class SettingsPage extends Component {
  render() {
    return (
      <div>
        -This is the settings component :)
        {/* TODO: Fill in the settings content */}
        <UserInfo />
        <UserForm />
      </div>
    );
  }
}

export default SettingsPage;
