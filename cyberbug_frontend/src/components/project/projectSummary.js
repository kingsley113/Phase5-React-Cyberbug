import React, { Component } from "react";

class ProjectSummary extends Component {
  render() {
    return (
      <div>
        --This is the project summary component :)
        <h3>{this.props.project.projectTitle}</h3>
        <p>{this.props.project.projectId}</p>
        {/* TODO: fill in project summary content */}
      </div>
    );
  }
}

export default ProjectSummary;
