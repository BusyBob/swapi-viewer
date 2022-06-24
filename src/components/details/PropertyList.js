import React from "react";
import ObjectList from "./ObjectList";
import PropertyLabel from "./PropertyLabel";

function PropertyList(props) {
  //console.log("PropertyList got: ", props);
  return (
    <ul>
      {Object.keys(props.info).map((prop, i) => {
        if (Array.isArray(props.info[prop])) {
          if (props.info[prop].length !== 0)
            return (
              <li
                key={i}
                id={prop + "_property"}
                style={{ textDecoration: "underline" }}
              >
                <ObjectList
                  property={prop}
                  info={props.info}
                  getData={props.getData}
                />
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
              <PropertyLabel
                prop={prop}
                info={props.info}
                getData={props.getData}
              />
            </li>
          );
      })}
    </ul>
  );
}

export default PropertyList;
