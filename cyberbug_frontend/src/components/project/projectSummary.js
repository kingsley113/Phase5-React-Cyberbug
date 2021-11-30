import React, { Component } from "react";

class ProjectSummary extends Component {
  renderProjectDetails() {
    if (this.props.project) {
      return (
        <div className="centered">
          {/* TODO: fill in project summary content */}
          <h3>Open | Overdue | Closed | Total</h3>
          <p>13---------6---------35-------999</p>
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
