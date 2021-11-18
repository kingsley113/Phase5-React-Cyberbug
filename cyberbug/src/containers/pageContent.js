import React, { Component } from "react";
// import PageHeader from "../components/pageHeader";
// import PageSidebar from "../components/pageSidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import SplashScreen from "../components/splashScreen";
import ProjectPage from "./pages/projectPage";
import SettingsPage from "./pages/settingsPage";

class PageContent extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={SplashScreen} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/project" component={ProjectPage} />
        <Route exact path="/settings" component={SettingsPage} />
      </Router>
      /* Modal window for forms */
      /* <ModalWindow /> */
      /* Only need modal window component for forms, should this be within form components? TODO: */
      /* Header */
    );
  }
}

export default PageContent;
