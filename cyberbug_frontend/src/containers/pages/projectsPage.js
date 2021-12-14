import React, { Component } from "react";
import { connect } from "react-redux";
import ProjectListDetailed from "../../components/dashboard/projectListDetailed";

class ProjectsPage extends Component {
  render() {
    return (
      <div>
        <ProjectListDetailed
          projects={this.props.projects}
          bugs={this.props.bugs}
        />
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

export default connect(mapStateToProps)(ProjectsPage);
