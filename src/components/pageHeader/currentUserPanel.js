import React, { Component } from "react";
import { Link } from "react-router-dom";
import currentUser from "../../helpers/currentUser";

class CurrentUserPanel extends Component {
  render() {
    if (currentUser) {
      const { first_name, last_name } = currentUser();
      return (
        <Link to="/settings" id="current-user-panel">
          <div>
            Hi, {first_name} {last_name}
          </div>
        </Link>
      );
    }
  }
}

export default CurrentUserPanel;
