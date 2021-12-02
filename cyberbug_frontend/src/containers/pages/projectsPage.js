import React, { Component } from "react";
import { connect } from "react-redux";
import ProjectListDetailed from "../../components/dashboard/projectListDetailed";
import BugList from "../../components/project/bugList";

import { setActiveProject } from "../../actions/projectActions";

class ProjectsPage extends Component {
  render() {
    return (
      <div>
        <ProjectListDetailed />
        <BugList />
      </div>
    );
  }

  // setProject() {
  //   console.log(this.props.match);
  //   if (this.props.projects) {
  //     return this.props.projects.filter((project) => {
  //       return project.projectId === this.props.match.params.projectId;
  //     })[0];
  //   } else {
  //     return null;
  //   }
  // }

  // SET ACTIVE BUG ON LOAD AND UPDATE
  // componentDidMount() {
  //   this.setProject();
  //   // TODO: error here on loading data, needs to trigger after data loaded
  //   this.props.setActiveProject(this.setProject());
  // }
  // componentDidUpdate() {
  //   this.setProject();
  //   // TODO: error here on loading data, needs to trigger after data loaded
  //   this.props.setActiveProject(this.setProject());
  // }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveProject: (project) => dispatch(setActiveProject(project)),
  };
};

export default connect(null, mapDispatchToProps)(ProjectsPage);
