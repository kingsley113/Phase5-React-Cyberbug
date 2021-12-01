import React, { Component } from "react";
import { connect } from "react-redux";

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
          <h3>
            {bug.bugId} - {bug.bugTitle}
          </h3>
          <p>Description: {bug.bugDescription}</p>
          <p>Details: {bug.bugDetails}</p>
          <p>Due Date: {bug.bugDueDate}</p>
          <p>Line No: {bug.bugLineNo}</p>
          <p>Priority: {bug.bugPriority}</p>
          <p>Tags: {bug.bugTags}</p>
          <p>Created: {bug.created_at}</p>
          <p>Updated: {bug.updated_at}</p>
        </div>
      );
    } else {
      <h3>Loading Info...</h3>;
    }
  }

  render() {
    const bug = this.state.bug;
    return (
      <div>
        {console.log(bug)}
        --This is the bug details component :)
        {this.renderBugDetails()}
        {/* TODO: fill in project summary content */}
        {/* <h3>{this.props.match.params.bugId}</h3> */}
        {/* {console.log(this.props.match.params.bugId)} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bugs: state.bugs.allBugs,
  };
};

export default connect(mapStateToProps)(BugDetails);
