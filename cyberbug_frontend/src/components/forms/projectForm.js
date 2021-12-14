import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject, editProject } from "../../actions/projectActions";
import { showToggle, hideToggle } from "../../actions/toggleActions";
import { renderCleanForm } from "../../actions/formActions";

import RandomIdGenerator from "../../helpers/randomIdGenerator";

class ProjectForm extends Component {
  state = {
    projectId: RandomIdGenerator.createBase36(6),
    projectTitle: "",
    projectDescription: "",
    user_id: JSON.parse(localStorage.current_user).id,
  };

  render() {
    return (
      <div>
        {/* {console.log(this.state)} */}
        {/* <h2>Create a new project:</h2> */}
        <form onSubmit={this.handleOnSubmit} id="project-form">
          <div id="project-form-id-stylized">{this.state.projectId}</div>
          <div id="project-form-title-stylized">{this.state.projectTitle}</div>
          {/* <label htmlFor="projectId" className="col-sm-1 right-align-text">
              Project ID:
            </label> */}
          {/* <span name="projectId" className="col-sm-1">
              {this.state.projectId}
            </span> */}
          <div className="row" id="project-title-row">
            <label htmlFor="projectTitle" className="col-sm-1 right-align-text">
              <b>Title:</b>
            </label>
            <input
              type="text"
              name="projectTitle"
              className="col-lg-3"
              value={this.state.projectTitle}
              onChange={this.handleOnChange}
              required
              placeholder="Project title (required)"
            />
          </div>
          <div className="row">
            <label
              htmlFor="projectDescription"
              className="col-sm-1 right-align-text"
            >
              <b>Description:</b>
            </label>
            <textarea
              name="projectDescription"
              value={this.state.projectDescription}
              onChange={this.handleOnChange}
              placeholder="Enter project description"
            ></textarea>
          </div>
          <div className="row form-btn-row">
            <input
              type="submit"
              value="Save Project"
              className="form-save-btn"
            />
            <button onClick={this.handleOnClick} className="form-cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  // LOAD BUG DATA IF EXISTING BUG IS LOADED
  componentDidMount() {
    if (this.props.activeProject && !this.props.cleanForm) {
      this.loadFormData();
    }
  }

  loadFormData() {
    const proj = this.props.activeProject;
    // console.log(proj);

    this.setState({ id: proj.id });
    for (const prop in this.state) {
      this.setState({
        [prop]: proj[prop] ? proj[prop] : "",
      });
    }
  }

  // EVENTS
  handleOnSubmit = (event) => {
    event.preventDefault();
    if (this.props.cleanForm) {
      // Reset the clean form status after submitting
      this.props.renderCleanForm(false);
      this.props.createProject(this.state);
    } else {
      this.props.editProject(this.state);
    }
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnClick = (event) => {
    this.props.hideToggle("newProjectFormToggle");
  };
}

const mapStateToProps = (state) => {
  return {
    activeProject: state.projects.activeProject,
    cleanForm: state.forms.renderCleanForm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (projectObject) => dispatch(createProject(projectObject)),
    editProject: (project) => dispatch(editProject(project)),
    showToggle: (id) => dispatch(showToggle(id)),
    hideToggle: (id) => dispatch(hideToggle(id)),
    renderCleanForm: (bool) => dispatch(renderCleanForm(bool)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
