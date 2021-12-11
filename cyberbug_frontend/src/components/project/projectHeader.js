import React, { Component } from "react";
import ProjectSummary from "./projectSummary";
import NewBugButton from "./newBugButton";
import { connect } from "react-redux";
import { showToggle } from "../../actions/toggleActions";
import { deleteProject } from "../../actions/projectActions";

class ProjectHeader extends Component {
  render() {
    if (this.props.project) {
      return (
        <div id="project-summary-panel">
          <div id="project-title">
            <h2>
              {this.props.project.projectId} - {this.props.project.projectTitle}
            </h2>
          </div>
          <div>
            <button onClick={this.handleOnClickEdit}>Edit Project</button>
            <button onClick={this.handleOnClickDelete}>Delete Project</button>
          </div>
          <div id="summary-panel">
            <NewBugButton />
            <div id="summary-divider-panel">
              <div className="centered" id="project-stats">
                <ProjectSummary project={this.props.activeProject} />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <h2>Loading</h2>;
    }
  }

  handleOnClickEdit = (event) => {
    console.log("Edit Project button Clicked");
    this.props.showToggle("newProjectFormToggle");
  };

  handleOnClickDelete = (event) => {
    if (window.confirm("Are you sure you want to yeet this project?")) {
      if (
        window.confirm(
          "Are you really sure?? Theres no turning back after deleting..."
        )
      ) {
        this.props.deleteProject(this.props.activeProject);
      }
    }
  };
}

const mapStateToProps = (state) => {
  return {
    activeProject: state.projects.activeProject,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showToggle: (id) => dispatch(showToggle("newProjectFormToggle")),
    deleteProject: (project) => dispatch(deleteProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectHeader);
