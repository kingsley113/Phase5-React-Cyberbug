import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class ProjectListSummary extends Component {
  renderProjects() {
    if (this.props.projects) {
      return this.props.projects.map((project) => {
        console.log(project);
        return (
          <li key={project.id} className={"summary-item"}>
            <div className="id-container">
              <Link
                key={project.projectId}
                to={`/projects/${project.projectId}`}
              >
                {project.projectId}
              </Link>{" "}
            </div>
            <div className="project-title">{project.projectTitle}</div>
            <div className="Open-Bug-Count">
              13
              {/* TODO: Add this open bug count function */}
            </div>
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
      <div>
        <div className="scroll-container">
          <ul>{this.renderProjects()}</ul>
        </div>
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
