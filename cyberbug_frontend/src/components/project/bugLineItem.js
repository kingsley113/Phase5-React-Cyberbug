import React from "react";

const BugLineItem = (props) => {
  // console.log(props);
  return <li>{props.bug.bugTitle}</li>;
};

export default BugLineItem;
