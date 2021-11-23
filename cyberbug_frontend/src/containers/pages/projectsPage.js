import React, { Component } from "react";
import ProjectsList from "../../components/dashboard/projectList";
import BugList from "../../components/project/bugList";
import { connect } from "react-redux";

class ProjectsPage extends Component {
  render() {
    return (
      <div>
        <ProjectsList
          projects={this.props.projects}
          activeProject={this.props.activeProject}
        />
        <BugList />
        {/* TODO: This is here temporarily jsut to look at all the bugs */}
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

export default connect(mapStateToProps)(ProjectsPage);
