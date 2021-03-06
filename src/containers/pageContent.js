import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Dashboard from "./pages/dashboard";
import ProjectPage from "./pages/projectPage";
import SettingsPage from "./pages/settingsPage";
import ProjectsPage from "./pages/projectsPage";
import ProjectForm from "../components/forms/projectForm";
import ModalWindow from "./modalWindow";
import Toggle from "./toggle";
import PageHeader from "../components/pageHeader";
import PageSidebar from "../components/pageSidebar";
import { loadProjects } from "../actions/projectActions";
import { loadBugs } from "../actions/bugActions";
import ProtectedRoute from "../components/auth/protectedRoute";
import RedirectIfLoggedIn from "../components/auth/redirectIfLoggedIn";
import PageNotFound from "./pages/pageNotFound";

class PageContent extends Component {
  render() {
    return (
      <ProtectedRoute>
        <div>
          <PageHeader />
        </div>
        <div className="page-main">
          <PageSidebar />
          <div className="full-width">
            <Switch>
              <Route exact path="/" render={() => <RedirectIfLoggedIn />} />
              <Route
                exact
                path="/dashboard"
                render={() => (
                  <Dashboard
                    projects={this.props.projects}
                    bugs={this.props.bugs}
                  />
                )}
              />
              <Route
                exact
                path="/projects"
                render={() => (
                  <ProjectsPage
                    projects={this.props.projects}
                    bugs={this.props.bugs}
                  />
                )}
              />
              <Route
                path="/projects/:id"
                render={(routerProps) => (
                  <ProjectPage
                    {...routerProps}
                    projects={this.props.projects}
                    activeProject={this.props.activeProject}
                    bugs={this.props.bugs}
                    activeBug={this.props.activeBug}
                  />
                )}
              />
              <Route exact path="/settings" component={SettingsPage} />
              <Route component={PageNotFound} />
            </Switch>

            <Toggle id={"newProjectFormToggle"}>
              <ModalWindow component={<ProjectForm />} />
            </Toggle>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  componentDidMount() {
    this.props.loadProjects();
    this.props.loadBugs();
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects.allProjects,
    activeProject: state.projects.activeProject,
    bugs: state.bugs.allBugs,
    activeBug: state.bugs.activeBug,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadProjects: () => dispatch(loadProjects()),
    loadBugs: () => dispatch(loadBugs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageContent);
