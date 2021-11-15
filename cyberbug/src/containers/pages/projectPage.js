import React, { Component } from "react";
import ProjectSummary from "../../components/project/projectSummary";
import BugList from "../../components/project/bugList";
import BugDetails from "../../components/project/bugDetails";

class ProjectPage extends Component {
  render() {
    return (
      <div>
        -This is the project page component :)
        {/* TODO: Fill in the project page content */}
        <ProjectSummary />
        <BugList />
        <BugDetails />
      </div>
    );
  }
}

export default ProjectPage;
