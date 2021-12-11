import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { connect } from "react-redux";
import { generateProjectStatusBarData } from "../../helpers/projectHelpers";
// import Button from "react-bootstrap/Button";

class ProjectStatus extends Component {
  render() {
    if (this.props.project && this.props.bugs) {
      return (
        <div className="status-bar-container">
          <ProgressBar>
            <ProgressBar
              striped
              variant="warning"
              now={this.calcProgressChartData()[0]}
              key={1}
            />
            <ProgressBar
              striped
              variant="danger"
              now={this.calcProgressChartData()[1]}
              key={2}
            />
            <ProgressBar
              striped
              variant="success"
              now={this.calcProgressChartData()[2]}
              key={3}
            />
          </ProgressBar>
        </div>
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
      console.log(data);
      return data;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    project: state.projects.activeProject,
    bugs: state.bugs.allBugs,
  };
};

export default connect(mapStateToProps)(ProjectStatus);
