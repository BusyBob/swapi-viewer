import React from "react";
import { Link } from "react-router-dom";

function FilmTile(props) {
  const urlOffset = 22;
  return (
    <Link
      to={{
        pathname: "/detail/" + props.movie.url.substring(urlOffset),
      }}
      state={props.movie}
    >
      <img
        className="FilmPoster"
        src={process.env.PUBLIC_URL + "/logo192.png"}
        alt={"Poster of " + props.movie.title}
        width="128px"
      ></img>
      {/*Temporary movie title.
      The poster image should have the title already
      and the title should live in alt*/}
      <div>{props.movie.title}</div>
    </Link>
  );
}

export default FilmTile;
