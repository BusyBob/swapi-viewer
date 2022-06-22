import React from "react";
import FilmLink from "./FilmLink";
import { Link } from "react-router-dom";

function FilmList(props) {
  if (props.hits.includes(true)) {
    return (
      <ul>
        {props.data.map((movie, i) => {
          return (
            props.hits[i] && (
              <li key={movie.title}>
                <Link
                  to={{
                    pathname: "/" + movie.url.substring(18),
                  }}
                  state={movie}
                >
                  {movie.title}
                </Link>
              </li>
            )
          );
        })}
      </ul>
    );
  } else return <div>Could not find film. Please try another search term.</div>;
}

export default FilmList;
