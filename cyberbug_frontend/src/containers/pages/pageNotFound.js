import React from "react";

const PageNotFound = () => {
  return (
    <div className="full-page centered-flex">
      <div className="centered-flex-vert">
        <img src="/cyberbugLogoQuick.png" alt="Cyberbug Logo" />
        <h1>Woops, page not found!</h1>
        <button onClick={() => window.history.back()}>
          Go Back to Safety!
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
