import React from "react";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <div>Unable to navigate to specified page. Please return to Home.</div>
      <Link
        to={{
          pathname: "/",
        }}
      >
        <div>Back to Home</div>
      </Link>
    </div>
  );
}

export default NoMatch;
