import React, { Component } from "react";
import { Route } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import SplashScreen from "../components/splashScreen";
import ProjectPage from "./pages/projectPage";
import SettingsPage from "./pages/settingsPage";
import ProjectsPage from "./pages/projectsPage";

class PageContent extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={SplashScreen} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/projects/:id" component={ProjectPage} />
        <Route exact path="/settings" component={SettingsPage} />
      </div>
      /* Modal window for forms */
      /* <ModalWindow /> */
      /* Only need modal window component for forms, should this be within form components? TODO: */
    );
  }
}

export default PageContent;
