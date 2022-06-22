import React from "react";
import { Link } from "react-router-dom";

function FilmLink(props) {
  return (
    <Link
      to={{
        pathname: "/" + props.movie.url.substring(18),
      }}
      state={props.movie}
    >
      {props.movie.title}
    </Link>
  );
}

export default FilmLink;
