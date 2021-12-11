import React, { Component } from "react";
import { connect } from "react-redux";
import {
  overdueBugCount,
  openBugCount,
  closedBugCount,
  totalBugCount,
} from "../../helpers/projectHelpers";
import ProjectStatus from "./projectStatus";

class ProjectSummary extends Component {
  renderProjectDetails() {
    if (this.props.project) {
      return (
        <div className="centered">
          {/* TODO: table styling */}
          <table>
            <thead>
              <tr>
                <th>Open</th>
                <th>Overdue</th>
                <th>Closed</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{openBugCount(this.props.project, this.props.bugs)}</td>
                <td>{overdueBugCount(this.props.project, this.props.bugs)}</td>
                <td>{closedBugCount(this.props.project, this.props.bugs)}</td>
                <td>{totalBugCount(this.props.project, this.props.bugs)}</td>
              </tr>
            </tbody>
          </table>
          <div className="status-bar-container">
            <ProjectStatus project={this.props.project} />
          </div>
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

const mapStateToProps = (state) => {
  return {
    bugs: state.bugs.allBugs,
    activeProject: state.projects.activeProject,
  };
};

export default connect(mapStateToProps)(ProjectSummary);
