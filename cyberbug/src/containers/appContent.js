import React, { Component } from "react";
import PageHeader from "../components/pageHeader";
import PageSidebar from "../components/pageSidebar";
import PageContent from "./pageContent";

class AppContent extends Component {
  render() {
    return (
      <div>
        {/* Header */}
        <PageHeader />
        {/* Sidebar */}
        <PageSidebar />
        {/* Content */}
        <PageContent />
      </div>
    );
  }
}

export default AppContent;
