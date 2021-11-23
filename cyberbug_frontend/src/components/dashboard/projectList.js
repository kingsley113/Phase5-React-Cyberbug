import React, { Component } from "react";

class ProjectsList extends Component {
  renderProjects() {
    if (this.props.projects.length > 0) {
      return this.props.projects.map((project) => {
        return (
          <li
            key={project.id}
            className={project.activeProject ? "active" : ""}
          >
            {project.projectId} - {project.projectTitle}
          </li>
        );
      });
    } else {
      return <h3>Loading...</h3>; //TODO: Make this more exciting?
    }
  }

  render() {
    return (
      <div>
        <h1>All Projects:</h1>
        <ul>{this.renderProjects()}</ul>
      </div>
    );
  }
}

export default ProjectsList;
