import React, { Component } from "react";
import { connect } from "react-redux";

import { showToggle, hideToggle } from "../../actions/toggleActions";

class NewProjectForm extends Component {
  render() {
    return (
      <div>
        <h2>Create a new project:</h2>
        <form onSubmit={this.handleOnSubmit}>
          <div className="row">
            <label htmlFor="project-id" className="col-sm-1 right-align-text">
              Project ID:
            </label>
            <input type="text" name="project-id" className="col-sm-1" />
            <label
              htmlFor="project-title"
              className="col-sm-1 right-align-text"
            >
              Title:
            </label>
            <input type="text" name="project-title" className="col-lg-3" />
          </div>
          <div className="row">
            <label
              htmlFor="project-description"
              className="col-sm-1 right-align-text"
            >
              Description:
            </label>
            <textarea name="project-description"></textarea>
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
    // TODO:Handle submitting project to API and saving to state
    console.log("New project form has been submitted");
  };

  handleOnClick = (event) => {
    this.props.hideToggle("newProjectFormToggle");
  };
}

// export default NewProjectForm;
const mapDispatchToProps = (dispatch) => {
  return {
    // createProject: (projectObject) => dispatch(createProject(projectObject)), TODO: Create this action
    showToggle: (id) => dispatch(showToggle(id)),
    hideToggle: (id) => dispatch(hideToggle(id)),
  };
};

export default connect(null, mapDispatchToProps)(NewProjectForm);
