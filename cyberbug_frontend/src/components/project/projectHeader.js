import React, { Component } from "react";
import ProjectSummary from "./projectSummary";
import ProjectStatus from "./projectStatus";
import NewBugButton from "./newBugButton";

class ProjectHeader extends Component {
  render() {
    return (
      <div id="project-summary-panel">
        <div id="project-title">
          <h2>
            {this.props.project.projectId} - {this.props.project.projectTitle}
          </h2>
        </div>
        <div id="summary-panel">
          <NewBugButton />
          <div id="summary-divider-panel">
            <div className="centered" id="project-stats">
              <ProjectSummary project={this.props.project} />
            </div>
            <div className="centered" id="project-status">
              <ProjectStatus project={this.props.project} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectHeader;
