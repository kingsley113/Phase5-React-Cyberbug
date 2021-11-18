import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

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
}

export default App;
