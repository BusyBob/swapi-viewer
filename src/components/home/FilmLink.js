import React from "react";
import { Link } from "react-router-dom";

function FilmLink(props) {
  const urlOffset = 22;
  return (
    <Link
      to={{
        pathname: "/detail/" + props.movie.url.substring(urlOffset),
      }}
      state={props.movie}
    >
      {props.movie.title}
    </Link>
  );
}

export default FilmLink;
