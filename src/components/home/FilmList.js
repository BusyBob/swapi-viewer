import React from "react";
import FilmLink from "./FilmLink";
import FilmTile from "../common/FilmTile";

function FilmList(props) {
  if (props.hits.includes(true)) {
    return (
      <ul className="FilmList">
        {props.data.map((movie, i) => {
          return (
            props.hits[i] && (
              <li className="FilmTile" key={movie.title}>
                <FilmTile movie={movie} />
              </li>
            )
          );
        })}
      </ul>
    );
  } else return <div>Could not find film. Please try another search term.</div>;
}

export default FilmList;
