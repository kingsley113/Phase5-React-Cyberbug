import React, { Component } from "react";

class PageSidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        {/* TODO: Fill in sidebar content here */}
        {/* New bug button  */}
        <img
          src="icons/new-bug.png"
          alt="new bug icon"
          className="sidebar-icon "
        />
        {/* home button  */}
        <img src="icons/home.png" alt="home icon" className="sidebar-icon" />
        {/* all projects button */}
        <img
          src="icons/projects-list.png"
          alt="project list icon"
          className="sidebar-icon"
        />
        {/* new project button */}
        <img
          src="icons/new-project.png"
          alt="new project icon"
          className="sidebar-icon separator-icon"
        />
        {/* settings button  */}
        <img
          src="icons/settings.png"
          alt="settings icon"
          className="sidebar-icon"
        />
        {/* logout button */}
        <img
          src="icons/logout.png"
          alt="logout icon"
          className="sidebar-icon btm-icon"
        />
      </div>
    );
  }
}

export default PageSidebar;
