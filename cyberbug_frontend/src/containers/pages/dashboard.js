import React, { Component } from "react";
import ProjectsChart from "../../components/dashboard/projectsChart";
import PriorityTasks from "../../components/dashboard/priorityTasks";
import DailyInfoPanel from "../../components/dashboard/dailyInfoPanel";
import ProjectsList from "../../components/dashboard/projectList";

class Dashboard extends Component {
  render() {
    return (
      <div className="test-border dashboard">
        <div className="test-border-blue dashboard-stats-container">
          <PriorityTasks />
          <ProjectsChart />
          <DailyInfoPanel />
        </div>
        <ProjectsList />
      </div>
    );
  }
}

export default Dashboard;
