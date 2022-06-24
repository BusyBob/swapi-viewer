import React from "react";
import { Link } from "react-router-dom";

function FetchErrorMessage() {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <div>Error encountered. Try again later.</div>
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

export default FetchErrorMessage;
