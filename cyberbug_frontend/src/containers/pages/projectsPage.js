import React, { Component } from "react";
import ProjectListDetailed from "../../components/dashboard/projectListDetailed";
import BugList from "../../components/project/bugList";

class ProjectsPage extends Component {
  render() {
    return (
      <div>
        <ProjectListDetailed />
        <BugList />
        {/* TODO: This is here temporarily jsut to look at all the bugs */}
      </div>
    );
  }
}

export default ProjectsPage;
