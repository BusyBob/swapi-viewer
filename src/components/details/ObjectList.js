import React from "react";
import FilmList from "../common/FilmList";
import ObjectTile from "./ObjectTile";

function ObjectList(props) {
  return (
    <div>
      <h3>
        {props.property.charAt(0).toUpperCase() + props.property.slice(1)}
      </h3>

      {props.property.includes("film") ? (
        <FilmList
          data={props.info[props.property]}
          hits={new Array(props.info[props.property].length).fill(true)}
        />
      ) : (
        <ul className="ObjectList">
          {props.info[props.property].map((link) => {
            return (
              <li className="ObjectTile" key={link}>
                <ObjectTile link={link} getData={props.getData} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default ObjectList;
