import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { showToggle, hideToggle } from "../../actions/toggleActions";

import BugList from "../../components/project/bugList";
import BugDetails from "../../components/project/bugDetails";
import NewBugForm from "../../components/forms/newBugForm";
import ModalWindow from "../modalWindow";
import Toggle from "../toggle";
import ProjectHeader from "../../components/project/projectHeader";

class ProjectPage extends PureComponent {
  render() {
    if (this.props.projects) {
      const project = this.filterProject();

      return (
        <div id="project-page">
          <Toggle id={"newBugFormToggle"}>
            <ModalWindow component={<NewBugForm project={project} />} />
          </Toggle>

          <div id="project-left-column">
            <ProjectHeader project={project} />
            <div id="bugs-list-panel">
              <BugList project={project} />
            </div>
          </div>

          <div className="test-border-blue" id="project-right-column">
            {/* TODO: This may need to be another nested route layer for the bug details? */}
            <BugDetails />
          </div>
          {/* TODO: Fill in the project page content */}
        </div>
      );
    } else {
      return <h3>Loading...</h3>;
    }
  }

  filterProject() {
    return this.props.projects.filter(
      (project) => project.projectId === this.props.match.params.id
    )[0];
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showToggle: (id) => dispatch(showToggle(id)),
    hideToggle: (id) => dispatch(hideToggle(id)),
  };
};

export default connect(null, mapDispatchToProps)(ProjectPage);
