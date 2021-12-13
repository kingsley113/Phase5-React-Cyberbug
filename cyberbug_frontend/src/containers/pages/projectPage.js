import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { showToggle, hideToggle } from "../../actions/toggleActions";
import {
  setActiveProject,
  deleteProject,
  resetActiveProject,
} from "../../actions/projectActions";

import BugList from "../../components/project/bugList";
import BugDetails from "../../components/project/bugDetails";
import BugForm from "../../components/forms/bugForm";
import ModalWindow from "../modalWindow";
import Toggle from "../toggle";
import ProjectHeader from "../../components/project/projectHeader";
import { Redirect, Route } from "react-router";

class ProjectPage extends PureComponent {
  render() {
    if (this.props.projects) {
      const project = this.setProject();

      if (project) {
        return (
          <div id="project-page">
            <Toggle id={"newBugFormToggle"}>
              <ModalWindow component={<BugForm project={project} />} />
            </Toggle>

            <div id="project-left-column">
              <ProjectHeader project={project} />
              <div id="bugs-list-panel">
                <BugList route={this.props.match.url} project={project} />
              </div>
            </div>

            <div id="project-right-column">
              <Route
                exact
                path={this.props.match.url}
                render={() => (
                  <div id="select-bug-placeholder">
                    <h3>Please select a Bug from the list</h3>
                  </div>
                )}
              />
              <Route
                path={`${this.props.match.url}/:bugId`}
                render={(routerProps) => <BugDetails {...routerProps} />}
              />
            </div>
          </div>
        );
      } else {
        return <Redirect to={this.props.match.url.slice(0, -7)} />;
      }
    } else {
      return <h3>Loading...</h3>;
    }
  }

  setProject() {
    if (this.props.projects) {
      return this.props.projects.filter((project) => {
        return project.projectId === this.props.match.params.id;
      })[0];
    } else {
      return null;
    }
  }

  // SET ACTIVE BUG ON LOAD AND UPDATE
  componentDidMount() {
    this.props.setActiveProject(this.setProject());
  }
  componentDidUpdate() {
    this.props.setActiveProject(this.setProject());
  }
  componentWillUnmount() {
    this.props.resetActiveProject();
  }

  // EVENTS
  // handleOnClickDelete = (event) => {
  //   // console.log("delete button clicked");
  //   if (window.confirm("Are you sure you want to yeet this project?")) {
  //     if (
  //       window.confirm(
  //         "Are you really sure?? Theres no turning back after deleting..."
  //       )
  //     ) {
  //       this.props.deleteProject(this.props.activeProject);
  //     }
  //   }
  // };
}

const mapDispatchToProps = (dispatch) => {
  return {
    showToggle: (id) => dispatch(showToggle(id)),
    hideToggle: (id) => dispatch(hideToggle(id)),
    setActiveProject: (project) => dispatch(setActiveProject(project)),
    resetActiveProject: (project) => dispatch(resetActiveProject()),
    deleteProject: (project) => dispatch(deleteProject(project)),
  };
};

export default connect(null, mapDispatchToProps)(ProjectPage);
