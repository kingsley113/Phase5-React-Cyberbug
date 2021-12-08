import React, { Component } from "react";
import { generatePieChartData } from "../../helpers/projectHelpers";

class ProjectsChart extends Component {
  render() {
    return (
      <div className="test-border" id="project-summary-chart">
        {/* TODO: fill in project chart content and API */}
        Placeholder data until the pie chart is set up:
        {this.renderPieChart()}
      </div>
    );
  }

  renderPieChart() {
    const data = generatePieChartData(this.props.projects, this.props.bugs);
    if (data) {
      return Object.keys(data).map((key, index) => {
        return (
          <p key={index}>
            Project Id: {key}: No of bugs: {data[key]}
          </p>
        );
      });
    }
  }
}

export default ProjectsChart;
