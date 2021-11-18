import React, { Component } from "react";
// import ProjectStatus from "../../components/project/projectStatus";
import ProjectsChart from "../../components/dashboard/projectsChart";
import PriorityTasks from "../../components/dashboard/priorityTasks";
import DailyInfoPanel from "../../components/dashboard/dailyInfoPanel";
import ProjectsList from "../../components/dashboard/projectList";
// import PageSidebar from "../../components/pageSidebar";

class Dashboard extends Component {
  render() {
    return (
      <div>
        -This is the dashboard component :)
        {/* TODO: Fill in the dashboard content here */}
        <PriorityTasks />
        <ProjectsChart />
        <DailyInfoPanel />
        {/* <ProjectStatus /> */}
        <ProjectsList />
      </div>
    );
  }
}

export default Dashboard;
