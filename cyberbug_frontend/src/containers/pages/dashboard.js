import React, { Component } from "react";
import ProjectsChart from "../../components/dashboard/projectsChart";
import PriorityTasks from "../../components/dashboard/priorityTasks";
import ProjectsListDetailed from "../../components/dashboard/projectListDetailed";

class Dashboard extends Component {
  render() {
    return (
      <div className="test-border dashboard">
        <div className="test-border-blue dashboard-stats-container">
          <PriorityTasks
            projects={this.props.projects}
            bugs={this.props.bugs}
          />
          <ProjectsChart
            projects={this.props.projects}
            bugs={this.props.bugs}
          />
        </div>
        <ProjectsListDetailed
          projects={this.props.projects}
          bugs={this.props.bugs}
        />
      </div>
    );
  }
}

export default Dashboard;
