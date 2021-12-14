import React, { Component } from "react";
import ProjectListDetailed from "../../components/dashboard/projectListDetailed";

class ProjectsPage extends Component {
  render() {
    return (
      <div>
        <ProjectListDetailed
          projects={this.props.projects}
          bugs={this.props.bugs}
        />
      </div>
    );
  }
}

export default ProjectsPage;
