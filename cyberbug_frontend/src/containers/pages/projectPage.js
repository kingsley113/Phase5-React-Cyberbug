import React, { Component } from "react";
import { connect } from "react-redux";

import { setActiveProject } from "../../actions/projectActions";

import ProjectSummary from "../../components/project/projectSummary";
import BugList from "../../components/project/bugList";
import BugDetails from "../../components/project/bugDetails";
import ProjectStatus from "../../components/project/projectStatus";

class ProjectPage extends Component {
  state = {
    project: this.setProject(),
  };

  setProject() {
    if (this.props.projects) {
      return this.props.projects.filter(
        (project) => project.projectId === this.props.match.params.id
      )[0];
    }
  }

  renderProjectInfo(project = null) {
    if (project) {
      // const project = this.state.project;
      return (
        <div>
          <h3>{project.projectTitle}</h3>
          <p>{project.projectId}</p>
        </div>
      );
    }
  }

  render() {
    const project = this.setProject();
    // this.setState({
    //   project: this.setProject(),
    // });
    // console.log(this.props.match.params.id);
    console.log(this.state.project);
    return (
      <div>
        -This is the project page component :)
        {/* TODO: Fill in the project page content */}
        {this.renderProjectInfo(project)}
        <ProjectSummary />
        <ProjectStatus />
        <BugList />
        <BugDetails />
      </div>
    );
  }

  componentDidMount() {
    // this.props.setActiveProject(this.props.match.params.id);
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveProject: (id) => dispatch(setActiveProject(id)),
  };
};

export default connect(null, mapDispatchToProps)(ProjectPage);
