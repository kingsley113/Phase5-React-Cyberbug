import React, { Component } from "react";
import UserInfo from "../../components/settings/userInfo";
import ProjectCredits from "../../components/settings/projectCredits";

class SettingsPage extends Component {
  render() {
    return (
      <div>
        <h1> Project Settings & Info</h1>
        <h2>Current User Info:</h2>
        {/* TODO: Fill in the settings content */}
        <UserInfo />
        <ProjectCredits />
      </div>
    );
  }
}

export default SettingsPage;
