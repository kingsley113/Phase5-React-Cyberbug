import React, { Component } from "react";
import { connect } from "react-redux";

class BugDetails extends Component {
  state = {
    bug: this.setBug(),
  };

  setBug() {
    return this.props.bugs.filter((bug) => {
      return bug.bugId === this.props.match.params.bugId;
    })[0];
  }

  render() {
    const bug = this.state.bug;
    return (
      <div>
        {console.log(bug)}
        --This is the bug details component :)
        {/* TODO: fill in project summary content */}
        <h3>{this.props.match.params.bugId}</h3>
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
