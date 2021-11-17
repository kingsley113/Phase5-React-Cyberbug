import React, { Component } from "react";

class CurrentUserPanel extends Component {
  handleOnClick = (event) => {
    console.log(
      "Thats my name dont wear it out!... This will load the settings page"
    );
  };

  render() {
    return (
      <div id="current-user-panel" onClick={this.handleOnClick}>
        {/* TODO: Fill in this content with the real user */}
        Hi, Marty McBuggy
      </div>
    );
  }
}

export default CurrentUserPanel;
