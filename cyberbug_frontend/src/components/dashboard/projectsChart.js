import React, { Component } from "react";
import { generatePieChartData } from "../../helpers/projectHelpers";
import Chart from "react-google-charts";

class ProjectsChart extends Component {
  render() {
    return (
      <div className="test-border" id="project-summary-chart">
        {/* TODO: fill in project chart content and API */}
        {/* Placeholder data until the pie chart is set up: */}
        {this.renderPieChart()}
      </div>
    );
  }

  renderPieChart() {
    const data = generatePieChartData(this.props.projects, this.props.bugs);
    if (data) {
      return (
        <div className="centered-flex-vert">
          <div className="list-title">
            <h2>Project Summary</h2>
          </div>
          <p>(No. of open bugs)</p>
          <Chart
            width={"100%"}
            height={"100%"}
            chartType="PieChart"
            data={data}
            options={{
              // title: "none",
              pieHole: 0.1,
              backgroundColor: "none",
              pieSliceText: "label",
              legend: "none",
              colors: ["272760", "442768", "ED1E79", "OCFFE1"],
              chartArea: { width: "90%", height: "90%" },
              // tooltip: { ignoreBounds: true, isHtml: true },
              height: "280",
            }}
          />
        </div>
      );
    }
  }
}

export default ProjectsChart;
