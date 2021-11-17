import React, { Component } from "react";
import ActiveProjectSelector from "./pageHeader/activeProjectSelector";
import CurrentUserPanel from "./pageHeader/currentUserPanel";

class PageHeader extends Component {
  render() {
    return (
      <div className="page-header">
        {/* TODO: Add header content here */}
        <img src="cyberbugLogoQuick.png" alt="Cyberbug Logo" className="logo" />
        <ActiveProjectSelector />
        <CurrentUserPanel />
      </div>
    );
  }
}

export default PageHeader;
