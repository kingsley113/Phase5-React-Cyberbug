import React, { Component } from "react";

const PageNotFound = (props) => {
  return (
    <div className="full-page centered-flex">
      <div className="centered-flex-vert">
        <h1>Woops, page not found!</h1>
        <button onClick={() => window.history.back()}>
          Go Back to Safety!
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
