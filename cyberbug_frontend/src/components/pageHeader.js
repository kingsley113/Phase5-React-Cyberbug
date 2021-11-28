import React, { Component } from "react";
// import ActiveProjectSelector from "./pageHeader/activeProjectSelector";
import RandomQuote from "./pageHeader/randomQuote";
import CurrentUserPanel from "./pageHeader/currentUserPanel";
import { connect } from "react-redux";

class PageHeader extends Component {
  render() {
    return (
      <div className="page-header">
        {/* TODO: Add header content here */}
        <img
          src="/cyberbugLogoQuick.png"
          alt="Cyberbug Logo"
          className="logo"
        />
        {/* <ActiveProjectSelector projects={this.props.projects} /> */}
        <RandomQuote />
        <CurrentUserPanel />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps)(PageHeader);
