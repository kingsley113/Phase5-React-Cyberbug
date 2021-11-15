import React, { Component } from "react";
import Dashboard from "./pages/dashboard";
import ProjectPage from "./pages/projectPage";
import SettingsPage from "./pages/settingsPage";

class PageContent extends Component {
  render() {
    return (
      <div>
        This is the page content component :)
        {/* TODO: Fill in page content meat and potatos here */}
        <Dashboard />
        <ProjectPage />
        <SettingsPage />
      </div>
    );
  }
}

export default PageContent;
