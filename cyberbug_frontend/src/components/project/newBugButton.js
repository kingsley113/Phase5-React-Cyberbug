import React, { Component } from "react";
import { connect } from "react-redux";
import { showToggle, hideToggle } from "../../actions/toggleActions";

class NewBugButton extends Component {
  render() {
    return (
      <div
        className="bug-icon-container"
        onClick={() => this.props.showToggle("newBugFormToggle")}
      >
        <div className="icon-background">
          <img
            src="/icons/new-bug.png"
            alt="new bug icon"
            className="bug-icon"
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showToggle: (id) => dispatch(showToggle(id)),
    hideToggle: (id) => dispatch(hideToggle(id)),
  };
};

export default connect(null, mapDispatchToProps)(NewBugButton);
