import React, { Component } from "react";
import { connect } from "react-redux";
import { hideToggle, showToggle } from "../../actions/toggleActions";
import {
  setActiveBug,
  editBug,
  deleteBug,
  resetActiveBug,
} from "../../actions/bugActions";
import { Redirect } from "react-router";
import ReactTagInput from "@pathofdev/react-tag-input";

class BugDetails extends Component {
  state = {
    bug: [],
  };

  setBug() {
    if (this.props.bugs) {
      return this.props.bugs.filter((bug) => {
        return bug.bugId === this.props.match.params.bugId;
      })[0];
    } else {
      return null;
    }
  }

  renderBugDetails() {
    if (this.props.bugs) {
      const bug = this.setBug();
      if (bug) {
        return (
          <div id="details-panel">
            <div id="stripe-separator"></div>
            <div id="details-container">
              <b>Description:</b>
              <p>{bug.bugDescription}</p>
              <b>Details:</b>
              <p>{bug.bugDetails}</p>
              <b>Tags:</b>
              <div id="tag-display-wrapper">
                {/* {bug.bugTags} */}
                {this.renderTags()}
              </div>
              <p>
                <b>Line No:</b> {bug.bugLineNo}
              </p>
              <p>
                <b>Status:</b> {bug.bugStatus}
              </p>
              <p>
                <b>Due Date:</b> {bug.bugDueDate}
              </p>
              <p>
                <b>Priority:</b> {bug.bugPriority}
              </p>
              <p>
                <b>Created:</b> {new Date(bug.created_at).toLocaleString()}
              </p>
              <p>
                <b>Updated:</b> {new Date(bug.updated_at).toLocaleString()}
              </p>
              <div id="delete-button-panel">
                <button
                  onClick={this.handleOnClickDelete}
                  id="bug-delete-button"
                >
                  Delete Bug
                </button>
              </div>
            </div>
          </div>
        );
      } else {
        return <Redirect to={this.props.match.url.slice(0, -7)} />;
      }
    } else {
      <h3>Loading Info...</h3>;
    }
  }

  render() {
    if (this.props.activeBug) {
      return (
        <div id="bug-details-panel">
          <div id="details-top-panel">
            <div id="bug-id-stylized">{this.props.match.params.bugId}</div>
            <div id="bug-title-stylized">{this.props.activeBug.bugTitle}</div>
            <div className="centered-flex">
              <button onClick={this.handleOnClickEdit} id="bug-edit-btn">
                Edit Bug
              </button>
              <button onClick={this.handleOnClickSquash} id="bug-squash-btn">
                Squash Bug
              </button>
            </div>
          </div>
          {this.renderBugDetails()}
        </div>
      );
    } else {
      return <h2>Loading</h2>;
    }
  }
  // SET ACTIVE BUG ON LOAD AND UPDATE
  componentDidMount() {
    this.props.setActiveBug(this.setBug());
  }
  componentDidUpdate() {
    this.props.setActiveBug(this.setBug());
  }
  componentWillUnmount() {
    this.props.resetActiveBug();
  }

  // EVENTS
  handleOnClickEdit = (event) => {
    this.props.showToggle("newBugFormToggle");
  };

  handleOnClickSquash = (event) => {
    const bug = this.props.activeBug;
    bug.bugStatus = "Complete";
    bug.bugComplete = true;

    this.props.editBug({ bug: bug });
  };

  handleOnClickDelete = (event) => {
    if (window.confirm("Are you sure you want to yeet this bug?")) {
      this.props.deleteBug(this.props.activeBug);
    }
  };

  // Render tags:
  renderTags() {
    if (this.props.activeBug) {
      return (
        <ReactTagInput
          tags={this.props.activeBug.bugTags.split(",")}
          readOnly={true}
        />
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveBug: (bug) => dispatch(setActiveBug(bug)),
    resetActiveBug: () => dispatch(resetActiveBug()),
    editBug: (bug) => dispatch(editBug(bug)),
    deleteBug: (bug) => dispatch(deleteBug(bug)),
    showToggle: (id) => dispatch(showToggle(id)),
    hideToggle: (id) => dispatch(hideToggle(id)),
  };
};

export default connect(null, mapDispatchToProps)(BugDetails);
