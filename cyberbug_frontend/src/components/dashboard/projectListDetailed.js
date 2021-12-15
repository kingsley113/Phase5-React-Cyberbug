import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  openBugCount,
  overdueBugCount,
  totalBugCount,
} from "../../helpers/projectHelpers";
import ProjectStatus from "../project/projectStatus";

class ProjectListDetailed extends Component {
  renderDetailedProjectList() {
    if (this.props.projects && this.props.projects.length > 0) {
      return this.props.projects.map((project) => {
        return (
          <tr key={project.id}>
            <td>
              <Link
                to={`/projects/${project.projectId}`}
                className="sidebar-icon-container"
                exact="true"
              >
                <img
                  src="/icons/view-project.png"
                  alt="view project icon"
                  className="list-icon"
                />
              </Link>
            </td>
            <td>{project.projectId}</td>
            <td>{project.projectTitle}</td>
            <td>{openBugCount(project, this.props.bugs)}</td>
            <td>{overdueBugCount(project, this.props.bugs)}</td>
            <td>{totalBugCount(project, this.props.bugs)}</td>
            <td>
              <ProjectStatus project={project} bugs={this.props.bugs} />
            </td>
            <td>{new Date(project.updated_at).toLocaleDateString()}</td>
          </tr>
        );
      });
    } else {
      return (
        <tr>
          <td>No Projects!</td>
        </tr>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="list-title">
          <h2>Project Details</h2>
        </div>
        <div className="scroll-container" id="project-list-detailed">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>ID</th>
                <th>Name</th>
                <th>Open</th>
                <th>Overdue</th>
                <th>Total</th>
                <th>Health</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>{this.renderDetailedProjectList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProjectListDetailed;
