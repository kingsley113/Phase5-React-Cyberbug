import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { loadProjects } from "./actions/projectActions";

import PageHeader from "./components/pageHeader";
import PageContent from "./containers/pageContent";
import PageSidebar from "./components/pageSidebar";

class App extends Component {
  render() {
    return (
      // <div>
      <Router>
        <div>
          <PageHeader />
        </div>
        <div className="page-main">
          {/* Sidebar */}
          <PageSidebar />
          {/* Content */}
          <PageContent />
        </div>
        {/* </div> */}
      </Router>
      // TODO: Add logic to determine if user is logged in or not and show splash screen if not
    );
  }

  componentDidMount() {
    this.props.loadProjects();
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadProjects: () => dispatch(loadProjects()),
  };
};

export default connect(null, mapDispatchToProps)(App);
