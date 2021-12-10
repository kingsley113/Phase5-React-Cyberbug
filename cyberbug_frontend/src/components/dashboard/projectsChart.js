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
      console.log(data);
      // return Object.keys(data).map((key, index) => {
      // return (
      //   // <p key={index}>
      //   //   Project Id: {key}: No of bugs: {data[key]}
      //   // </p>
      // );
      // });
      return (
        <Chart
          width={"100%"}
          height={"100%"}
          chartType="PieChart"
          data={
            // [
            //   ["Bug", "Count"],
            //   ["Sample", 4],
            //   ["Sample2", 8],
            // ]
            data
            // TODO:
          }
          options={{
            title: "Open Bugs by Project",
            pieHole: 0.1,
            backgroundColor: "none",
            pieSliceText: "label",
            legend: "none",
            colors: ["272760", "442768", "ED1E79", "OCFFE1"],
            is3D: true,
          }}
        />
      );
    }
  }
}

export default ProjectsChart;
