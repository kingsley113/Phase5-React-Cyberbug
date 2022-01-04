import React, { Component } from "react";
import UserInfo from "../../components/settings/userInfo";
import ProjectCredits from "../../components/settings/projectCredits";

class SettingsPage extends Component {
  render() {
    return (
      <div id="settings-page">
        <div id="settings-title-stylized"> Project Settings & Info</div>
        <h1 id="current-user-title">Current User:</h1>
        <UserInfo />
        <ProjectCredits />
      </div>
    );
  }
}

export default SettingsPage;
