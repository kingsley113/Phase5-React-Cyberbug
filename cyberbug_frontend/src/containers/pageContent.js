import React, { Component } from "react";
import { Route } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import SplashScreen from "../components/splashScreen";
import ProjectPage from "./pages/projectPage";
import SettingsPage from "./pages/settingsPage";
import ProjectsPage from "./pages/projectsPage";
import NewProjectForm from "../components/forms/newProjectForm";
import NewBugForm from "../components/forms/newBugForm";
import ModalWindow from "./modalWindow";
import Toggle from "./toggle";

class PageContent extends Component {
  render() {
    return (
      <div className="full-width">
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={SplashScreen} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/projects/:id" component={ProjectPage} />
        <Route exact path="/settings" component={SettingsPage} />

        <Toggle id={"newProjectFormToggle"}>
          <ModalWindow component={<NewProjectForm />} />
        </Toggle>

        <Toggle id={"newBugFormToggle"}>
          <ModalWindow component={<NewBugForm />} />
        </Toggle>
      </div>
    );
  }
}

export default PageContent;