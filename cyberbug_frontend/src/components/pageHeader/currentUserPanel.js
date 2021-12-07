import React, { Component } from "react";
import { Link } from "react-router-dom";
import currentUser from "../../helpers/currentUser";

class CurrentUserPanel extends Component {
  render() {
    if (currentUser) {
      const { first_name, last_name } = currentUser();
      return (
        <Link to="/settings">
          <div id="current-user-panel">
            Hi, {first_name} {last_name}
          </div>
        </Link>
      );
    }
  }
}

export default CurrentUserPanel;
