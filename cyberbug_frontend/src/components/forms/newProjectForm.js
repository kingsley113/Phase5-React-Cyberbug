import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../actions/projectActions";
import { showToggle, hideToggle } from "../../actions/toggleActions";

class NewProjectForm extends Component {
  state = {
    projectId: "",
    projectTitle: "",
    projectDescription: "",
  };

  render() {
    return (
      <div>
        <h2>Create a new project:</h2>
        <form onSubmit={this.handleOnSubmit}>
          <div className="row">
            <label htmlFor="projectId" className="col-sm-1 right-align-text">
              Project ID:
            </label>
            <input
              type="text"
              name="projectId"
              className="col-sm-1"
              value={this.state.projectId}
              onChange={this.handleOnChange}
            />
            <label htmlFor="projectTitle" className="col-sm-1 right-align-text">
              Title:
            </label>
            <input
              type="text"
              name="projectTitle"
              className="col-lg-3"
              value={this.state.projectTitle}
              onChange={this.handleOnChange}
            />
          </div>
          <div className="row">
            <label
              htmlFor="projectDescription"
              className="col-sm-1 right-align-text"
            >
              Description:
            </label>
            <textarea
              name="projectDescription"
              value={this.state.projectDescription}
              onChange={this.handleOnChange}
            ></textarea>
          </div>
          <div className="row">
            <input type="submit" value="Create Project" />
            <button onClick={this.handleOnClick}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.createProject(this.state);
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

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (projectObject) => dispatch(createProject(projectObject)),
    showToggle: (id) => dispatch(showToggle(id)),
    hideToggle: (id) => dispatch(hideToggle(id)),
  };
};

export default connect(null, mapDispatchToProps)(NewProjectForm);
