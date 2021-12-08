import React, { Component } from "react";
import ProjectsChart from "../../components/dashboard/projectsChart";
import PriorityTasks from "../../components/dashboard/priorityTasks";
// import DailyInfoPanel from "../../components/dashboard/dailyInfoPanel";
import ProjectsListDetailed from "../../components/dashboard/projectListDetailed";
import { connect } from "react-redux";

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
          {/* <DailyInfoPanel /> */}
        </div>
        <ProjectsListDetailed />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects.allProjects,
    bugs: state.bugs.allBugs,
  };
};

export default connect(mapStateToProps)(Dashboard);
// TODO: define connect here and pass props to each component? to reduce how much we need to define connect?
