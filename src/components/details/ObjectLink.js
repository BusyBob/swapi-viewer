import React from "react";
import { Link } from "react-router-dom";

function ObjectLink(props) {
  const urlOffset = 22;
  return (
    <Link
      to={{
        pathname: "/detail/" + props.link.substring(urlOffset),
      }}
      state={props.link.substring(urlOffset)}
      onClick={() => props.getData()}
    >
      {props.link}
    </Link>
  );
}

export default ObjectLink;
