import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class ProjectListSummary extends Component {
  renderProjects() {
    if (this.props.projects) {
      return this.props.projects.map((project) => {
        return (
          <li
            key={project.id}
            className={project.activeProject ? "active" : ""}
          >
            <Link key={project.projectId} to={`/projects/${project.projectId}`}>
              {project.projectId}
            </Link>{" "}
            - {project.projectTitle}
          </li>
        );
      });
    } else {
      return <h3>Loading...</h3>; //TODO: Make this more exciting?
    }
  }

  renderActiveProject() {
    return this.props.activeProject
      ? this.props.activeProject.projectTitle
      : "No Project Selected";
  }

  render() {
    return (
      <div className="scroll-container">
        <h1>All Projects:</h1>
        <ul>{this.renderProjects()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects.allProjects,
    activeProject: state.projects.activeProject,
  };
};

export default connect(mapStateToProps)(ProjectListSummary);
