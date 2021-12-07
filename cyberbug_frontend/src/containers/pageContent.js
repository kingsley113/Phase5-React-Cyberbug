import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import Dashboard from "./pages/dashboard";
import ProjectPage from "./pages/projectPage";
import SettingsPage from "./pages/settingsPage";
import ProjectsPage from "./pages/projectsPage";
import NewProjectForm from "../components/forms/newProjectForm";
import ModalWindow from "./modalWindow";
import Toggle from "./toggle";
import PageHeader from "../components/pageHeader";
import PageSidebar from "../components/pageSidebar";
import { loadProjects } from "../actions/projectActions";
import { loadBugs } from "../actions/bugActions";

class PageContent extends Component {
  render() {
    return (
      <div>
        <div>
          <PageHeader />
        </div>
        <div className="page-main">
          <PageSidebar />
          <div className="full-width">
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/projects" component={ProjectsPage} />
            <Route
              path="/projects/:id"
              render={(routerProps) => (
                <ProjectPage
                  {...routerProps}
                  projects={this.props.projects}
                  activeProject={this.props.activeProject}
                />
              )}
            />
            <Route exact path="/settings" component={SettingsPage} />

            <Toggle id={"newProjectFormToggle"}>
              <ModalWindow component={<NewProjectForm />} />
            </Toggle>
          </div>
        </div>
      </div>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadProjects: () => dispatch(loadProjects()),
    loadBugs: () => dispatch(loadBugs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageContent);
