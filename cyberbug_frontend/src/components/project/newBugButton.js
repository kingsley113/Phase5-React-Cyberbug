import React, { Component } from "react";
import { connect } from "react-redux";
import { showToggle, hideToggle } from "../../actions/toggleActions";
import { renderCleanForm } from "../../actions/formActions";

class NewBugButton extends Component {
  render() {
    return (
      <div className="bug-icon-container" onClick={this.handleOnClick}>
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

  handleOnClick = (event) => {
    this.props.renderCleanForm(true);
    this.props.showToggle("newBugFormToggle");
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    renderCleanForm: (bool) => dispatch(renderCleanForm(bool)),
    showToggle: (id) => dispatch(showToggle(id)),
    hideToggle: (id) => dispatch(hideToggle(id)),
  };
};

export default connect(null, mapDispatchToProps)(NewBugButton);
