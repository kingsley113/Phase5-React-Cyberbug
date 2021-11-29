import React, { Component } from "react";

class ProjectSummary extends Component {
  renderProjectDetails() {
    if (this.props.project) {
      return (
        <div>
          <h3>{this.props.project.projectTitle}</h3>
          <p>{this.props.project.projectId}</p>
          {/* TODO: fill in project summary content */}
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return this.renderProjectDetails();
  }
}

export default ProjectSummary;
