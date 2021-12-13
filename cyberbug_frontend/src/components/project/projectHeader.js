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
        <div id="project-title-panel">
          <div id="project-title">
            <div id="project-id-stylized">{this.props.project.projectId}</div>
            <div id="project-title-stylized">
              {this.props.project.projectTitle}
            </div>
          </div>
          <div id="project-buttons-panel">
            <span class="button-wrap">
              <button onClick={this.handleOnClickEdit} id="project-edit-btn">
                Edit Project
              </button>
            </span>
            <span class="button-wrap">
              <button
                onClick={this.handleOnClickDelete}
                id="project-delete-btn"
              >
                Delete Project
              </button>
            </span>
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
