import React from "react";
import { Link } from "react-router-dom";

function ObjectTile(props) {
  const urlOffset = 22;

  const getLabel = () => {
    var label = props.link;
    return label.substring(urlOffset).includes("people")
      ? "Person " +
          label.substring(
            label.substring(0, label.length - 1).lastIndexOf("/") + 1,
            label.length - 1
          )
      : label.charAt(urlOffset).toUpperCase() +
          label.slice(1).substring(urlOffset, label.lastIndexOf("s/") - 1) +
          " " +
          label.substring(label.lastIndexOf("s/") + 2, label.length - 1);
  };

  return (
    <Link
      to={{
        pathname: "/detail/" + props.link.substring(urlOffset) + "#title",
      }}
      state={props.link.substring(urlOffset)}
      onClick={() => props.getData()}
    >
      <img
        className="FilmPoster"
        src={process.env.PUBLIC_URL + "/logo192.png"}
        alt={"Picture of " + getLabel()}
        width="80%"
      ></img>
      <div>{getLabel()}</div>
    </Link>
  );
}

export default ObjectTile;
