import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { generateProjectStatusBarData } from "../../helpers/projectHelpers";

class ProjectStatus extends Component {
  render() {
    if (this.props.project && this.props.bugs) {
      return (
        <ProgressBar id="project-progress-bar">
          <ProgressBar
            striped
            variant="warning"
            now={this.calcProgressChartData()[0]}
            key={1}
            label="Open"
          />
          <ProgressBar
            striped
            variant="danger"
            now={this.calcProgressChartData()[1]}
            key={2}
            label="Overdue"
          />
          <ProgressBar
            striped
            variant="success"
            now={this.calcProgressChartData()[2]}
            key={3}
            label="Closed"
          />
        </ProgressBar>
      );
    } else {
      return <p>Loading Chart</p>;
    }
  }

  calcProgressChartData() {
    if (this.props.project && this.props.bugs) {
      const data = generateProjectStatusBarData(
        this.props.project,
        this.props.bugs
      );
      return data;
    }
  }
}

export default ProjectStatus;
