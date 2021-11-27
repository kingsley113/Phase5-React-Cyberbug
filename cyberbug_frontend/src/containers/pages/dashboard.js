import React, { Component } from "react";
import ProjectsChart from "../../components/dashboard/projectsChart";
import PriorityTasks from "../../components/dashboard/priorityTasks";
import DailyInfoPanel from "../../components/dashboard/dailyInfoPanel";
import ProjectsListSummary from "../../components/dashboard/projectListSummary";

class Dashboard extends Component {
  render() {
    return (
      <div className="test-border dashboard">
        <div className="test-border-blue dashboard-stats-container">
          <PriorityTasks />
          <ProjectsChart />
          <DailyInfoPanel />
        </div>
        {/* <ProjectsListSummary /> */}
        Create and add a detailed project list here, could we use the a prop on
        the project list component to change mode?
      </div>
    );
  }
}

export default Dashboard;
