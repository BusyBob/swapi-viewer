import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";

function Details() {
  //const urlOffset = 22;
  var data = useLocation();
  var [info, setInfo] = useState(data.state);
  var [isError, setError] = useState(false);
  var [isLoading, setLoading] = useState(false);
  const [apiMap, setApiMapPair] = useState(new Map());

  console.log("Starting data: ", data);
  console.log("Starting info: ", info);
  console.log("Current Map: ", apiMap);

  const getData = async () => {
    setLoading(true);
    var query = data.pathname;
    const url = "https://swapi.dev/" + query;
    if (apiMap.has(url)) {
      setInfo(apiMap.get(url));
      //console.log("Found in Map");
    } else {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw Error("Failed to fetch data.");
        }
        const val = await response.json();
        setInfo(val);
        setApiMapPair(apiMap.set(url, val));
        //console.log("Adding to Map");
      } catch (err) {
        console.error(err);
        setError(true);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    console.log("Component loaded, grabbing data...");
    getData();
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error encountered. Try again later.</div>;
  }
  return (
    <React.Fragment>
      <div>
        <h1 id="title">Details</h1>
        <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="Temp"></img>
        <div className="Glossary">
          <h3 style={{ marginBottom: 0 }}>Glossary</h3>
          <ol style={{ fontSize: 13 }}>
            {Object.keys(info).map((prop, i) => {
              if (Array.isArray(info[prop])) {
                if (info[prop].length !== 0)
                  return (
                    <li key={prop}>
                      <a href={"#" + prop + "_property"}>
                        {prop.charAt(0).toUpperCase() + prop.slice(1)}{" "}
                      </a>
                    </li>
                  );
              } else
                return (
                  <li key={prop}>
                    <a href={"#" + prop + "_property"}>
                      {prop.charAt(0).toUpperCase() + prop.slice(1)}
                    </a>
                  </li>
                );
            })}
          </ol>
        </div>
        <ul>
          {Object.keys(info).map((prop, i) => {
            if (Array.isArray(info[prop])) {
              if (info[prop].length !== 0)
                return (
                  <li key={prop} id={prop + "_property"}>
                    <h3>{prop.charAt(0).toUpperCase() + prop.slice(1)}</h3>
                    <ul>
                      {info[prop].map((link) => {
                        return (
                          <li key={link}>
                            <Link
                              to={{
                                pathname: "/" + link.substring(18),
                              }}
                              state={link.substring(18)}
                              onClick={() => getData()}
                            >
                              {link}
                            </Link>
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
                  {prop.toUpperCase().replace("_", " ")}: {info[prop]}
                </li>
              );
          })}
        </ul>
        <></>
        <a href="#title"> Back to the top </a>
      </div>
    </React.Fragment>
  );
}

export default Details;
