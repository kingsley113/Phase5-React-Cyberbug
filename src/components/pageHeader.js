import React, { Component } from "react";
import RandomQuote from "./pageHeader/randomQuote";
import CurrentUserPanel from "./pageHeader/currentUserPanel";
import { connect } from "react-redux";

class PageHeader extends Component {
  render() {
    return (
      <div className="page-header">
        <img
          src="/icons/cyberbugLogoQuick.png"
          alt="Cyberbug Logo"
          className="logo"
        />
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
