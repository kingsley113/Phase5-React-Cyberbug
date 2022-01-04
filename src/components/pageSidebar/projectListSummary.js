import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { openBugCount } from "../../helpers/projectHelpers";

class ProjectListSummary extends Component {
  renderProjects() {
    if (this.props.projects) {
      return this.props.projects.map((project) => {
        return (
          <Link key={project.projectId} to={`/projects/${project.projectId}`}>
            <li
              key={project.id}
              className={`summary-item ${this.renderActiveProject(project)}`}
            >
              <div className="id-container">{project.projectId}</div>
              <div className="project-title">{project.projectTitle}</div>
              <div className="Open-Bug-Count">
                {openBugCount(project, this.props.bugs)}
              </div>
            </li>
          </Link>
        );
      });
    } else {
      return <h3>Loading...</h3>;
    }
  }

  renderActiveProject(project) {
    if (this.props.activeProject) {
      return project.projectId === this.props.activeProject.projectId
        ? "active"
        : null;
    }
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
    bugs: state.bugs.allBugs,
  };
};

export default connect(mapStateToProps)(ProjectListSummary);
