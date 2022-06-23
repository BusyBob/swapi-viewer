import React from "react";
import { Link } from "react-router-dom";

function FilmTile(props) {
  const urlOffset = 22;
  //console.log(props);

  const makeLink = (url, title, nextState) => {
    return (
      <Link
        to={{
          pathname: "/detail/" + url.substring(urlOffset) + "#title",
        }}
        state={nextState}
      >
        <img
          className="FilmPoster"
          src={process.env.PUBLIC_URL + "/logo192.png"}
          alt={"Poster of " + title}
          width="128px"
        ></img>
        {/*Temporary movie title.
      The poster image should have the title already
      and the title should live in alt*/}
        <div>{title}</div>
      </Link>
    );
  };

  if (typeof props.movie === "string") {
    return makeLink(
      props.movie,
      props.movie
        .substring(urlOffset, props.movie.length - 1)
        .replace("/", " "),
      null
    );
  } else return makeLink(props.movie.url, props.movie.title, props.movie);
}

export default FilmTile;
