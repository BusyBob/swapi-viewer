import React from "react";
import FilmLink from "./FilmLink";

function FilmList(props) {
  if (props.hits.includes(true)) {
    return (
      <ul>
        {props.data.map((movie, i) => {
          return (
            props.hits[i] && (
              <li key={movie.title}>
                <FilmLink movie={movie} />
              </li>
            )
          );
        })}
      </ul>
    );
  } else return <div>Could not find film. Please try another search term.</div>;
}

export default FilmList;
