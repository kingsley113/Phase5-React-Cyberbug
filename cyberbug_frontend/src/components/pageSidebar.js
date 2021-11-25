import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { showToggle, hideToggle } from "../actions/toggleActions";
import ProjectsList from "./dashboard/projectList";

class PageSidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div>
          <ProjectsList
          // projects={this.props.projects}
          // activeProject={this.props.activeProject}
          />
        </div>
        <div className="button-container">
          {/* home button  */}
          <Link to="/" className="sidebar-icon-container" exact="true">
            <img
              src="icons/home.png"
              alt="home icon"
              className="sidebar-icon"
            />
          </Link>
          {/* new project button */}
          <div
            className="sidebar-icon-container"
            onClick={() => this.props.showToggle("newProjectFormToggle")}
          >
            <img
              src="icons/new.png"
              alt="new project icon"
              className="sidebar-icon"
            />
          </div>
          {/* settings button  */}
          <Link to="/settings" className="sidebar-icon-container" exact="true">
            <img
              src="icons/settings.png"
              alt="settings icon"
              className="sidebar-icon"
            />
          </Link>
          {/* logout button */}
          <Link to="/login" className="sidebar-icon-container" exact="true">
            <img
              src="icons/logout.png"
              alt="logout icon"
              className="sidebar-icon"
              onClick={() => this.logout()}
            />
          </Link>
        </div>
      </div>
    );
  }

  logout = () => {
    // TODO: Fill in logout process here
  };
}

// const mapStateToProps = (state) => {
//   return {
//     projects: state.projects.allProjects,
//     activeProject: state.projects.activeProject,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    showToggle: (id) => dispatch(showToggle(id)),
    hideToggle: (id) => dispatch(hideToggle(id)),
  };
};

export default connect(null, mapDispatchToProps)(PageSidebar);
