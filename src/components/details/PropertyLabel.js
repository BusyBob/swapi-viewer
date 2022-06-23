import React from "react";
import ObjectTile from "./ObjectTile";

function PropertyLabel(props) {
  return (
    <div>
      <h4
        style={{
          textAlign: "left",
          marginBottom: "5px",
          textDecoration: "underline",
        }}
      >
        {props.prop.toUpperCase().replace("_", " ")}
      </h4>
      {props.info[props.prop] === null && (
        <label style={{ display: "block", textAlign: "justify" }}>
          Unknown
        </label>
      )}
      {props.info[props.prop] !== null &&
        !props.info[props.prop].toString().includes("https") && (
          <label style={{ display: "block", textAlign: "justify" }}>
            {props.info[props.prop]}
          </label>
        )}
      {props.info[props.prop] !== null &&
        props.info[props.prop].toString().includes("https") && (
          <button className="ObjectTile">
            <ObjectTile link={props.info[props.prop]} getData={props.getData} />
          </button>
        )}
    </div>
  );
}

export default PropertyLabel;
