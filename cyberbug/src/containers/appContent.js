import React, { Component } from "react";
import PageHeader from "../components/pageHeader";
import PageSidebar from "../components/pageSidebar";
import ModalWindow from "./modalWindow";
import PageContent from "./pageContent";

class AppContent extends Component {
  render() {
    return (
      <div>
        {/* Modal window for forms */}
        <ModalWindow />
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
