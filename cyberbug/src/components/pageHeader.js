import React, { Component } from "react";
import ActiveProjectSelector from "./pageHeader/activeProjectSelector";
import CurrentUserPanel from "./pageHeader/currentUserPanel";

class PageHeader extends Component {
  render() {
    return (
      <div>
        {/* TODO: Add header content here */}
        This is the page header component :)
        <ActiveProjectSelector />
        <CurrentUserPanel />
      </div>
    );
  }
}

export default PageHeader;
