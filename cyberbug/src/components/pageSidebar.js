import React, { Component } from "react";
import { Link } from "react-router-dom";

class PageSidebar extends Component {
  logout = () => {
    // TODO: Fill in logout process here
  };

  render() {
    return (
      <div className="sidebar">
        {/* New bug button  */}
        <Link to="/newBug" className="sidebar-icon-container" exact>
          <img
            src="icons/new-bug.png"
            alt="new bug icon"
            className="sidebar-icon"
          />
        </Link>
        {/* view project button */}
        <Link to="/projects" className="sidebar-icon-container" exact>
          {/* TODO:Add logic to go to active project id */}
          <img
            src="icons/view-project.png"
            alt="project icon"
            className="sidebar-icon"
          />
        </Link>
        {/* home button  */}
        <Link to="/" className="sidebar-icon-container" exact>
          <img src="icons/home.png" alt="home icon" className="sidebar-icon" />
        </Link>
        {/* all projects button */}
        <Link to="/projects" className="sidebar-icon-container" exact>
          <img
            src="icons/projects-list.png"
            alt="project list icon"
            className="sidebar-icon"
          />
        </Link>
        {/* new project button */}
        <Link
          to="/newProject"
          className="sidebar-icon-container separator-icon"
          exact
        >
          <img
            src="icons/new.png"
            alt="new project icon"
            className="sidebar-icon"
            // onClick={() => navigate("/newProject")}
          />
        </Link>
        {/* settings button  */}
        <Link to="/settings" className="sidebar-icon-container">
          <img
            src="icons/settings.png"
            alt="settings icon"
            className="sidebar-icon"
            // onClick={() => navigate("/settings")}
          />
        </Link>
        {/* logout button */}
        <Link to="/login" className="sidebar-icon-container">
          <img
            src="icons/logout.png"
            alt="logout icon"
            className="sidebar-icon btm-icon"
            onClick={() => this.logout()}
          />
        </Link>
      </div>
    );
  }
}

export default PageSidebar;
