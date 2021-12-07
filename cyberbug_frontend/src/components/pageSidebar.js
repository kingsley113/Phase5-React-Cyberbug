import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { showToggle, hideToggle } from "../actions/toggleActions";
import ProjectListSummary from "./pageSidebar/projectListSummary";
import { renderCleanForm } from "../actions/formActions";
import { logout } from "../actions/authActions";

class PageSidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div>
          <h3>All Projects:</h3>
        </div>
        <div className="scroll-container">
          <ProjectListSummary />
        </div>
        <div className="sidebar-button-container">
          {/* home button  */}
          <Link to="/" className="sidebar-icon-container" exact="true">
            <img
              src="/icons/home.png"
              alt="home icon"
              className="sidebar-icon"
            />
          </Link>
          {/* new project button */}
          <div
            className="sidebar-icon-container"
            onClick={this.handleOnClickNewProject}
          >
            <img
              src="/icons/new.png"
              alt="new project icon"
              className="sidebar-icon"
            />
          </div>
          {/* settings button  */}
          <Link to="/settings" className="sidebar-icon-container" exact="true">
            <img
              src="/icons/settings.png"
              alt="settings icon"
              className="sidebar-icon"
            />
          </Link>
          {/* logout button */}
          <Link to="/login" className="sidebar-icon-container" exact="true">
            <img
              src="/icons/logout.png"
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
    this.props.logout();
  };

  handleOnClickNewProject = (event) => {
    this.props.renderCleanForm(true);
    this.props.showToggle("newProjectFormToggle");
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    showToggle: (id) => dispatch(showToggle(id)),
    hideToggle: (id) => dispatch(hideToggle(id)),
    renderCleanForm: (bool) => dispatch(renderCleanForm(bool)),
    logout: () => dispatch(logout()),
  };
};

export default connect(null, mapDispatchToProps)(PageSidebar);
