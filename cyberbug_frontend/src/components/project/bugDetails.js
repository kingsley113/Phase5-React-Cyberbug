import React, { Component } from "react";
import { connect } from "react-redux";
import { hideToggle, showToggle } from "../../actions/toggleActions";
import { setActiveBug, editBug, deleteBug } from "../../actions/bugActions";
import { Redirect } from "react-router";

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
          <div>
            {/* TODO: This will have all of the detailed info */}
            <div className="centered-flex" id="details-title">
              <h3>{bug.bugTitle}</h3>
            </div>
            <p>Status: {bug.bugStatus}</p>
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
            <button onClick={this.handleOnClickDelete}>Delete</button>
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
      </div>
    );
  }
  // SET ACTIVE BUG ON LOAD AND UPDATE
  componentDidMount() {
    // TODO: error here on loading data, needs to trigger after data loaded
    this.props.setActiveBug(this.setBug());
  }
  componentDidUpdate() {
    // TODO: error here on loading data, needs to trigger after data loaded
    this.props.setActiveBug(this.setBug());
  }

  // EVENTS
  handleOnClickEdit = (event) => {
    this.props.showToggle("newBugFormToggle");
  };

  handleOnClickSquash = (event) => {
    // console.log("Squash button clicked");
    const bug = this.props.activeBug;
    bug.bugStatus = "Complete";
    bug.bugComplete = true;

    // console.log(bug);
    this.props.editBug({ bug: bug });
    // dispatch action to set status to complete
    // this.props.completeBug(this.props.activeBug);
  };

  handleOnClickDelete = (event) => {
    // console.log("delete button clicked");
    if (window.confirm("Are you sure you want to yeet this bug?")) {
      this.props.deleteBug(this.props.activeBug);
    }
  };
}

const mapStateToProps = (state) => {
  return {
    bugs: state.bugs.allBugs,
    activeBug: state.bugs.activeBug,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveBug: (bug) => dispatch(setActiveBug(bug)),
    editBug: (bug) => dispatch(editBug(bug)),
    deleteBug: (bug) => dispatch(deleteBug(bug)),
    // completeBug: (bug) => dispatch(completeBug(bug)),
    showToggle: (id) => dispatch(showToggle(id)),
    hideToggle: (id) => dispatch(hideToggle(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BugDetails);
