import React, { Component } from "react";
import ProjectSummary from "../../components/project/projectSummary";
import BugList from "../../components/project/bugList";
import BugDetails from "../../components/project/bugDetails";
import ProjectStatus from "../../components/project/projectStatus";
// import { connect } from "react-redux";

class ProjectPage extends Component {
  state = {
    project: null,
  };

  render() {
    return (
      <div>
        {/* {this.setCurrentProject()} */}
        {/* {console.log(this.props)} */}
        {/* {console.log(this.props.projects)} */}
        {console.log(this.state.project)}
        {/* {console.log(this.props.match.params.id)} */}
        {/* {console.log(this.props)} */}
        -This is the project page component :)
        {/* TODO: Fill in the project page content */}
        <ProjectSummary />
        <ProjectStatus />
        <BugList />
        <BugDetails />
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     allProjects: state.projects.allProjects,
//   };
// };

export default ProjectPage;
