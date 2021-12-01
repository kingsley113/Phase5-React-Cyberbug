import React, { Component } from "react";
import { connect } from "react-redux";
import BugLineItem from "./bugLineItem";

class BugList extends Component {
  renderBugs = () => {
    if (this.props.bugs.allBugs) {
      const bugs = this.props.bugs.allBugs.filter(
        (bug) => bug.project_id === this.props.project.id
      );

      const bugList = bugs.map((bug, id) => {
        return <BugLineItem key={id} bug={bug} url={this.props.route} />;
      });
      if (bugList.length > 0) {
        return bugList;
      } else {
        return <h3>No bugs! :)</h3>;
      }
    } else {
      return <h3>Loading Bugs...</h3>;
    }
  };

  render() {
    return (
      <div>
        --This is the bug list component :)
        {/* TODO: fill in bug list content */}
        <ul>{this.renderBugs()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bugs: state.bugs,
  };
};

export default connect(mapStateToProps)(BugList);
