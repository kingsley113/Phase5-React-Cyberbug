import React, { Component } from "react";
import ProjectsList from "../../components/dashboard/projectList";
import BugList from "../../components/project/bugList";

class ProjectsPage extends Component {
  render() {
    return (
      <div>
        <ProjectsList />
        <BugList />
        {/* TODO: This is here temporarily jsut to look at all the bugs */}
      </div>
    );
  }
}

export default ProjectsPage;
