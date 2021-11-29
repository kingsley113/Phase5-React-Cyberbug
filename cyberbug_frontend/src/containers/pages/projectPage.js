import React, { PureComponent } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";

// import { setActiveProject } from "../../actions/projectActions";
import { showToggle, hideToggle } from "../../actions/toggleActions";

import ProjectSummary from "../../components/project/projectSummary";
import BugList from "../../components/project/bugList";
import BugDetails from "../../components/project/bugDetails";
import ProjectStatus from "../../components/project/projectStatus";

import NewBugForm from "../../components/forms/newBugForm";
import ModalWindow from "../modalWindow";
import Toggle from "../toggle";

class ProjectPage extends PureComponent {
  filterProject() {
    if (this.props.projects) {
      const project = this.props.projects.filter(
        (project) => project.projectId === this.props.match.params.id
      )[0];
      return project;
    }
  }

  // renderProjectInfo() {
  //   const project = this.filterProject();
  //   return (
  //     <div>
  //       <h3>{project.projectTitle}</h3>
  //       <p>{project.projectId}</p>
  //     </div>
  //   );
  // }

  render() {
    return (
      <div className="test-border" id="project-page">
        <Toggle id={"newBugFormToggle"}>
          <ModalWindow
            component={<NewBugForm project={this.filterProject()} />}
          />
        </Toggle>

        <div className="test-border-blue" id="project-left-column">
          <div className="test-border" id="project-summary-panel">
            <div
              className="bug-icon-container"
              onClick={() => this.props.showToggle("newBugFormToggle")}
            >
              <div className="icon-background">
                <img
                  src="/icons/new-bug.png"
                  alt="new bug icon"
                  className="bug-icon"
                />
              </div>
            </div>
            <ProjectSummary project={this.filterProject()} />
            <ProjectStatus project={this.filterProject()} />
          </div>
          <div id="bugs-list-panel">
            <BugList project={this.filterProject()} />
          </div>
        </div>
        <div className="test-border-blue" id="project-right-column">
          {/* TODO: This may need to be another nested route layer for the bug details? */}
          <BugDetails />
        </div>
        {/* TODO: Fill in the project page content */}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // setActiveProject: (id) => dispatch(setActiveProject(id)),
    showToggle: (id) => dispatch(showToggle(id)),
    hideToggle: (id) => dispatch(hideToggle(id)),
  };
};

export default connect(null, mapDispatchToProps)(ProjectPage);
