import React from "react";
import { Link } from "react-router-dom";

const BugLineItem = (props) => {
  // console.log(props);
  return (
    <li>
      {/* {console.log(props.url)} */}
      <Link key={props.bug.bugId} to={`${props.url}/${props.bug.bugId}`}>
        {props.bug.bugId}
      </Link>
      - {props.bug.bugTitle} - Project ID: {props.bug.project_id}
    </li>
  );
};

export default BugLineItem;
