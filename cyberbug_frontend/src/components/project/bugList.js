import React, { Component } from "react";
import { connect } from "react-redux";
import BugLineItem from "./bugLineItem";

class BugList extends Component {
  renderBugs = () => {
    return this.props.bugs.bugs.map((bug, id) => {
      return <BugLineItem key={id} bug={bug} />;
    });
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
