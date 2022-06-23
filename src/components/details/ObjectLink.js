import React from "react";
import { Link } from "react-router-dom";

function ObjectLink(props) {
  return (
    <Link
      to={{
        pathname: "/" + props.link.substring(18),
      }}
      state={props.link.substring(18)}
      onClick={() => props.getData()}
    >
      {props.link}
    </Link>
  );
}

export default ObjectLink;
