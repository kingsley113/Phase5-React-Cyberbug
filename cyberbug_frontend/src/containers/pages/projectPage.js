import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { setActiveProject } from "../../actions/projectActions";

import ProjectSummary from "../../components/project/projectSummary";
import BugList from "../../components/project/bugList";
import BugDetails from "../../components/project/bugDetails";
import ProjectStatus from "../../components/project/projectStatus";

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
        <div className="test-border-blue" id="project-left-column">
          <div className="test-border" id="project-summary-panel">
            {/* TODO: NEW BUG ICON & LINK */}
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
    setActiveProject: (id) => dispatch(setActiveProject(id)),
  };
};

export default connect(null, mapDispatchToProps)(ProjectPage);
