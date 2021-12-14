import React from "react";

const PageNotFound = () => {
  return (
    <div>
      <div className="full-page centered-flex gradient-background">
        <div className="centered-flex-vert">
          <img src="/cyberbugLogoQuick.png" alt="Cyberbug Logo" />
          <h1>Whoops, page not found!</h1>
          <button onClick={() => window.history.back()} id="page-back-btn">
            Go Back to Safety!
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
