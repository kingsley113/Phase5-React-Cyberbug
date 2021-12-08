import React, { Component } from "react";
import { connect } from "react-redux";
import {
  overdueBugCount,
  openBugCount,
  closedBugCount,
  totalBugCount,
} from "../../helpers/projectHelpers";

class ProjectSummary extends Component {
  renderProjectDetails() {
    if (this.props.project) {
      return (
        <div className="centered">
          {/* TODO: make this a table or some better way to present it... */}
          <h3>Open | Overdue | Closed | Total</h3>
          <p>
            {openBugCount(this.props.project, this.props.bugs)}---------
            {overdueBugCount(this.props.project, this.props.bugs)}
            ---------{closedBugCount(this.props.project, this.props.bugs)}
            -------{totalBugCount(this.props.project, this.props.bugs)}
          </p>
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
    project: state.projects.activeProject,
  };
};

export default connect(mapStateToProps)(ProjectSummary);
