import React from "react";
import ObjectLink from "./ObjectLink";

function ObjectList(props) {
  return (
    <ul>
      {Object.keys(props.info).map((prop, i) => {
        if (Array.isArray(props.info[prop])) {
          if (props.info[prop].length !== 0)
            return (
              <li key={prop} id={prop + "_property"}>
                <h3>{prop.charAt(0).toUpperCase() + prop.slice(1)}</h3>
                <ul>
                  {props.info[prop].map((link) => {
                    return (
                      <li key={link}>
                        <ObjectLink link={link} getData={props.getData} />
                      </li>
                    );
                  })}
                </ul>
                <br></br>
              </li>
            );
        } else
          return (
            <li key={i} id={prop + "_property"}>
              {prop.toUpperCase().replace("_", " ")}: {props.info[prop]}
            </li>
          );
      })}
    </ul>
  );
}

export default ObjectList;
