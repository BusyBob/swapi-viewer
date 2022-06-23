import React from "react";
import ObjectLink from "./ObjectTile";
import FilmList from "../common/FilmList";

function ObjectList(props) {
  return (
    <ul>
      {Object.keys(props.info).map((prop, i) => {
        if (Array.isArray(props.info[prop])) {
          if (props.info[prop].length !== 0)
            return (
              <li
                key={prop}
                id={prop + "_property"}
                style={{ textDecoration: "underline" }}
              >
                <h3>{prop.charAt(0).toUpperCase() + prop.slice(1)}</h3>

                {prop.includes("film") && (
                  <FilmList
                    data={props.info[prop]}
                    hits={new Array(props.info[prop].length).fill(true)}
                  />
                )}
                {!prop.includes("film") && (
                  <ul className="ObjectList">
                    {props.info[prop].map((link) => {
                      return (
                        <li className="ObjectTile" key={link}>
                          <ObjectLink link={link} getData={props.getData} />
                        </li>
                      );
                    })}
                  </ul>
                )}
                <br></br>
              </li>
            );
        } else
          return (
            <li
              key={i}
              id={prop + "_property"}
              style={{
                marginLeft: "5%",
                marginRight: "5%",
                marginTop: "40px",
              }}
            >
              <h4
                style={{
                  textAlign: "left",
                  marginBottom: "5px",
                  textDecoration: "underline",
                }}
              >
                {prop.toUpperCase().replace("_", " ")}
              </h4>
              <label style={{ display: "block", textAlign: "justify" }}>
                {props.info[prop]}
              </label>
            </li>
          );
      })}
    </ul>
  );
}

export default ObjectList;
