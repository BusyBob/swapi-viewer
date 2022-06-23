import React from "react";

function Glossary(props) {
  return (
    <div className="Glossary">
      <h3 style={{ marginBottom: 0 }}>Glossary</h3>
      <ol style={{ fontSize: 13 }}>
        {Object.keys(props.info).map((prop, i) => {
          if (Array.isArray(props.info[prop])) {
            if (props.info[prop].length !== 0)
              return (
                <li key={prop}>
                  <a href={"#" + prop + "_property"}>
                    {prop.charAt(0).toUpperCase() +
                      prop.slice(1).replace("_", " ")}{" "}
                  </a>
                </li>
              );
          } else
            return (
              <li key={prop}>
                <a href={"#" + prop + "_property"}>
                  {prop.charAt(0).toUpperCase() +
                    prop.slice(1).replace("_", " ")}
                </a>
              </li>
            );
        })}
      </ol>
    </div>
  );
}

export default Glossary;
