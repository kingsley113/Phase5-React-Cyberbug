import React, { Component } from "react";
import { connect } from "react-redux";

class ProjectListDetailed extends Component {
  render() {
    return <div>{/* TODO: Create List here */}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects.allProjects,
  };
};

export default connect(mapStateToProps)(ProjectListDetailed);
