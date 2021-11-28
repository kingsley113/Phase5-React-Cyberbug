import React, { Component } from "react";
import { connect } from "react-redux";

class ProjectListDetailed extends Component {
  renderDetailedProjectList() {
    if (this.props.projects) {
      return this.props.projects.map((project) => {
        return (
          <tr key={project.id}>
            <td>{project.projectId}</td>
            <td>{project.projectTitle}</td>
            <td>13</td>
            <td>13</td>
            <td>13</td>
            <td>proj health</td>
            <td>updated</td>
          </tr>
        );
      });
    }
  }

  render() {
    return (
      <div>
        {/* TODO: Create List here */}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Open Bugs</th>
              <th>Overdue Bugs</th>
              <th>Total Bugs</th>
              <th>Project Health</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>{this.renderDetailedProjectList()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects.allProjects,
  };
};

export default connect(mapStateToProps)(ProjectListDetailed);
