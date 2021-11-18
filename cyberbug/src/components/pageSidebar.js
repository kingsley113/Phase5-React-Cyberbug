import React, { Component } from "react";
// import { useNavigate as navigate } from "react-router-dom";

class PageSidebar extends Component {
  logout = () => {
    // TODO: Fill in logout process here
  };

  render() {
    return (
      <div className="sidebar">
        {/* TODO: Fill in sidebar content here */}
        {/* New bug button  */}
        <img
          src="icons/new-bug.png"
          alt="new bug icon"
          className="sidebar-icon"
          // onClick={() => navigate("/newBug")}
        />
        {/* home button  */}
        <img
          src="icons/home.png"
          alt="home icon"
          className="sidebar-icon"
          // onClick={() => navigate("/dashboard")}
        />
        {/* all projects button */}
        <img
          src="icons/projects-list.png"
          alt="project list icon"
          className="sidebar-icon"
          // onClick={() => navigate("/projects")}
        />
        {/* new project button */}
        <img
          src="icons/new-project.png"
          alt="new project icon"
          className="sidebar-icon separator-icon"
          // onClick={() => navigate("/newProject")}
        />
        {/* settings button  */}
        <img
          src="icons/settings.png"
          alt="settings icon"
          className="sidebar-icon"
          // onClick={() => navigate("/settings")}
        />
        {/* logout button */}
        <img
          src="icons/logout.png"
          alt="logout icon"
          className="sidebar-icon btm-icon"
          // onClick={() => logout()}
        />
      </div>
    );
  }
}

export default PageSidebar;
