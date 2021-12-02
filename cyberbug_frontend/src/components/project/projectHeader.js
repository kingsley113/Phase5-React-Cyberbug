import React, { Component } from "react";
import ProjectSummary from "./projectSummary";
import ProjectStatus from "./projectStatus";
import NewBugButton from "./newBugButton";
import { connect } from "react-redux";
import { showToggle } from "../../actions/toggleActions";

class ProjectHeader extends Component {
  render() {
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
              <ProjectSummary project={this.props.project} />
            </div>
            <div className="centered" id="project-status">
              <ProjectStatus project={this.props.project} />
            </div>
          </div>
        </div>
      </div>
    );
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

const mapDispatchToProps = (dispatch) => {
  return {
    showToggle: (id) => dispatch(showToggle("newProjectFormToggle")),
  };
};

export default connect(null, mapDispatchToProps)(ProjectHeader);
