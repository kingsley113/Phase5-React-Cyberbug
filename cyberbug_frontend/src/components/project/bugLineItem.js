import React from "react";

const BugLineItem = (props) => {
  // console.log(props);
  return (
    <li>
      {props.bug.bugTitle} - Project ID: {props.bug.bugProjectId}
    </li>
  );
};

export default BugLineItem;
