import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { showToggle, hideToggle } from "../actions/toggleActions";

class PageSidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        {/* New bug button  */}
        <div
          className="sidebar-icon-container"
          onClick={() => this.props.showToggle("newBugFormToggle")}
        >
          <img
            src="icons/new-bug.png"
            alt="new bug icon"
            className="sidebar-icon"
          />
        </div>
        {/* view project button */}
        <Link to="/projects" className="sidebar-icon-container" exact="true">
          {/* TODO:Add logic to go to active project id */}
          <img
            src="icons/view-project.png"
            alt="project icon"
            className="sidebar-icon"
          />
        </Link>
        {/* home button  */}
        <Link to="/" className="sidebar-icon-container" exact="true">
          <img src="icons/home.png" alt="home icon" className="sidebar-icon" />
        </Link>
        {/* all projects button */}
        <Link to="/projects" className="sidebar-icon-container" exact="true">
          <img
            src="icons/projects-list.png"
            alt="project list icon"
            className="sidebar-icon"
          />
        </Link>
        {/* new project button */}
        <div
          className="sidebar-icon-container separator-icon"
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
            className="sidebar-icon btm-icon"
            onClick={() => this.logout()}
          />
        </Link>
      </div>
    );
  }

  logout = () => {
    // TODO: Fill in logout process here
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    showToggle: (id) => dispatch(showToggle(id)),
    hideToggle: (id) => dispatch(hideToggle(id)),
  };
};

export default connect(null, mapDispatchToProps)(PageSidebar);
