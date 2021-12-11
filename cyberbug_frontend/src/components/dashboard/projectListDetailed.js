import React, { Component } from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  openBugCount,
  overdueBugCount,
  projectHealth,
  totalBugCount,
} from "../../helpers/projectHelpers";
import ProjectStatus from "../project/projectStatus";
// import { useTable } from "react-table";

class ProjectListDetailed extends Component {
  renderDetailedProjectList() {
    if (this.props.projects) {
      // TODO: Revisit the react-table implementation later
      // const columns = React.useMemo(
      //   () => [
      //     {
      //       Header: "Id",
      //       accessor: "projectId",
      //     },
      //     { Header: "Title", accessor: "projectTitle" },
      //     { Header: "Open Bugs", accessor: "openBugs" },
      //     { Header: "Overdue Bugs", accessor: "overdueBugs" },
      //     { Header: "TotalBugs", accessor: "totalOpenBugs" },
      //     { Header: "Project Health", accessor: "projectHealth" },
      //     { Header: "Last Updated", accessor: "updated" },
      //   ],
      //   []
      // );

      return this.props.projects.map((project) => {
        return (
          <tr key={project.id}>
            <td>
              <Link
                to={`/projects/${project.projectId}`}
                className="sidebar-icon-container"
                exact="true"
              >
                <img
                  src="/icons/view-project.png"
                  alt="view project icon"
                  className="list-icon"
                />
              </Link>
            </td>
            <td>{project.projectId}</td>
            <td>{project.projectTitle}</td>
            <td>{openBugCount(project, this.props.bugs)}</td>
            <td>{overdueBugCount(project, this.props.bugs)}</td>
            <td>{totalBugCount(project, this.props.bugs)}</td>
            <td>
              <ProjectStatus project={project} />
              {/* {projectHealth(project, this.props.bugs)}% */}
            </td>
            <td>{new Date(project.updated_at).toLocaleDateString()}</td>
          </tr>
        );
      });
    }
  }

  render() {
    return (
      <div className="scroll-container">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Name</th>
              <th>Open</th>
              <th>Overdue</th>
              <th>Total</th>
              <th>Health</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>{this.renderDetailedProjectList()}</tbody>
        </table>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     projects: state.projects.allProjects,
//     bugs: state.bugs.allBugs,
//   };
// };

// export default connect(mapStateToProps)(ProjectListDetailed);
export default ProjectListDetailed;
