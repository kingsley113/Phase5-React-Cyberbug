import React, { Component } from "react";
import { connect } from "react-redux";
import BugLineItem from "./bugLineItem";

class BugList extends Component {
  constructor(props) {
    super();
    this.project = props.project;
    this.bugs = props.bugs;
    this.route = props.route;
  }

  renderBugs = () => {
    if (this.bugs.allBugs) {
      const bugs = this.bugs.allBugs.filter(
        (bug) => bug.project_id === this.project.id
      );

      const bugList = bugs.map((bug, id) => {
        return <BugLineItem key={id} bug={bug} url={this.route} />;
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
