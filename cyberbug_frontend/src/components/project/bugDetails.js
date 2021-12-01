import React, { Component } from "react";
import { connect } from "react-redux";
import { hideToggle, showToggle } from "../../actions/toggleActions";
import { setActiveBug } from "../../actions/bugActions";

class BugDetails extends Component {
  state = {
    bug: [],
  };

  setBug() {
    return this.props.bugs.filter((bug) => {
      return bug.bugId === this.props.match.params.bugId;
    })[0];
  }

  renderBugDetails() {
    if (this.props.bugs) {
      const bug = this.setBug();
      return (
        <div>
          {/* TODO: This will have all of the detailed info */}
          <div className="centered-flex" id="details-title">
            <h3>{bug.bugTitle}</h3>
          </div>
          <p>Description:</p>
          <div className="test-border">{bug.bugDescription}</div>
          <p>Details:</p>
          <div className="test-border">{bug.bugDetails}</div>
          <p>Tags:</p>
          <div className="test-border">{bug.bugTags}</div>
          <p>Due Date: {bug.bugDueDate}</p>
          <p>Line No: {bug.bugLineNo}</p>
          <p>Priority: {bug.bugPriority}</p>
          <p>Created: {bug.created_at}</p>
          <p>Updated: {bug.updated_at}</p>
        </div>
      );
    } else {
      <h3>Loading Info...</h3>;
    }
  }

  render() {
    return (
      <div>
        <div id="details-top-panel">
          <div>
            <h2>Details</h2>
          </div>
          <div className="centered-flex">
            <button onClick={this.handleOnClickEdit}>Edit</button>
          </div>
          <div className="centered-flex">
            <button onClick={this.handleOnClickSquash}>Squash</button>
          </div>
          <div>
            <h3>{this.props.match.params.bugId}</h3>
          </div>
        </div>
        {this.renderBugDetails()}
        {/* TODO: fill in project summary content */}
        {/* <h3>{this.props.match.params.bugId}</h3> */}
        {/* {console.log(this.props.match.params.bugId)} */}
      </div>
    );
  }

  handleOnClickEdit = (event) => {
    console.log("Edit button clicked");
    // TODO: Should the active project be set on details panel load?
    this.props.setActiveBug(this.setBug());
    this.props.showToggle("newBugFormToggle");
  };

  handleOnClickSquash = (event) => {
    console.log("Squash button clicked");
  };
}

const mapStateToProps = (state) => {
  return {
    bugs: state.bugs.allBugs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveBug: (bug) => dispatch(setActiveBug(bug)),
    showToggle: (id) => dispatch(showToggle(id)),
    hideToggle: (id) => dispatch(hideToggle(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BugDetails);
