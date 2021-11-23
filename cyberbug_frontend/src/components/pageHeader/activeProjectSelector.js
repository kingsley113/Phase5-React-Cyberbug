import React, { Component } from "react";
import { connect } from "react-redux";
import { setActiveProject } from "../../actions/projectActions";

class ActiveProjectSelector extends Component {
  handleOnChange = (event) => {
    this.props.setActiveProject(event.target.value);
  };

  renderProjectOptions() {
    if (this.props.projects.allProjects) {
      return this.props.projects.allProjects.map((project) => {
        return (
          <option value={project.id} key={project.id}>
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
        <form>
          <select
            name="active-project"
            id="active-project-dropdown"
            onChange={this.handleOnChange}
            defaultValue={"default"}
          >
            <option value="default" disabled hidden>
              Select a Project
            </option>
            {this.renderProjectOptions()}
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
