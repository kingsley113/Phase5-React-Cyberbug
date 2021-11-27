import React, { Component } from "react";
import ProjectListSummary from "../../components/dashboard/projectListSummary";
import BugList from "../../components/project/bugList";

class ProjectsPage extends Component {
  render() {
    return (
      <div>
        <ProjectListSummary />
        <BugList />
        {/* TODO: This is here temporarily jsut to look at all the bugs */}
      </div>
    );
  }
}

export default ProjectsPage;
