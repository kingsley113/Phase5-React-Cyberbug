import React, { Component } from "react";
import { connect } from "react-redux";
// import ProjectStatus from "../../components/project/projectStatus";
import ProjectsChart from "../../components/dashboard/projectsChart";
import PriorityTasks from "../../components/dashboard/priorityTasks";
import DailyInfoPanel from "../../components/dashboard/dailyInfoPanel";
import ProjectsList from "../../components/dashboard/projectList";
// import PageSidebar from "../../components/pageSidebar";

class Dashboard extends Component {
  render() {
    return (
      <div className="test-border dashboard">
        <div className="test-border-blue dashboard-stats-container">
          <PriorityTasks />
          <ProjectsChart />
          <DailyInfoPanel />
        </div>
        {/* <ProjectStatus /> */}
        <ProjectsList
          projects={this.props.projects}
          activeProject={this.props.activeProject}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects.allProjects,
    activeProject: state.projects.activeProject,
  };
};

export default connect(mapStateToProps)(Dashboard);
