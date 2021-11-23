import React, { Component } from "react";
import { connect } from "react-redux";
import { setActiveProject } from "../../actions/projectActions";

class ActiveProjectSelector extends Component {
  handleOnChange = (event) => {
    // console.log("This would switch to project: ", event.target.value);
    this.props.setActiveProject(event.target.value);
  };

  renderProjectOptions() {
    if (this.props.projects.length > 0) {
      return this.props.projects.map((project) => {
        return (
          <option value={project.projectId} key={project.id}>
            {/* TODO: Add 'selected' to option line if activeproject === true */}
            {project.projectId} - {project.projectTitle}
          </option>
        );
      });
    } else {
      return <option>Loading</option>;
    }
  }

  render() {
    return (
      <div>
        {/* TODO: fill in selector content */}
        <form>
          <select
            name="active-project"
            id="active-project-dropdown"
            onChange={this.handleOnChange}
          >
            {this.renderProjectOptions()}
            {/* <option value="dummy-project-1">Dummy Project 1</option>
            <option value="dummy-project-2">Dummy Project 2</option>
            <option value="dummy-project-3">Dummy Project 3</option>
            <option value="dummy-project-4">Dummy Project 4</option> */}
          </select>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveProject: (id) => dispatch(setActiveProject(id)),
  };
};

export default connect(null, mapDispatchToProps)(ActiveProjectSelector);
