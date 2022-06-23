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
        <label
          style={{ display: "block", textAlign: "justify", fontSize: "20px" }}
        >
          Unknown
        </label>
      )}
      {props.info[props.prop] !== null &&
      props.info[props.prop].toString().includes("https") ? (
        <button className="ObjectTile">
          <ObjectTile link={props.info[props.prop]} getData={props.getData} />
        </button>
      ) : (
        <label
          style={{ display: "block", textAlign: "justify", fontSize: "20px" }}
        >
          {props.info[props.prop]}
        </label>
      )}
    </div>
  );
}

export default PropertyLabel;
