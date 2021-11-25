import React, { Component } from "react";
import ProjectSummary from "../../components/project/projectSummary";
import BugList from "../../components/project/bugList";
import BugDetails from "../../components/project/bugDetails";
import ProjectStatus from "../../components/project/projectStatus";

class ProjectPage extends Component {
  state = {
    project: null,
  };

  render() {
    return (
      <div>
        -This is the project page component :)
        {/* TODO: Fill in the project page content */}
        <ProjectSummary />
        <ProjectStatus />
        <BugList />
        <BugDetails />
      </div>
    );
  }
}

export default ProjectPage;
