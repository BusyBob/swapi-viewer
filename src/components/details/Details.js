import { useState, useEffect } from "react";
import React from "react";
import { useLocation } from "react-router-dom";
import Glossary from "./Glossary";
import PropertyList from "./PropertyList";
import Loading from "../common/Loading";
import FetchErrorMessage from "../common/FetchErrorMessage";

function Details() {
  var data = useLocation();
  var [info, setInfo] = useState(data.state);
  var [isError, setError] = useState(false);
  var [isLoading, setLoading] = useState(false);
  const [apiMap, setApiMapPair] = useState(new Map());

  // console.log("Starting data: ", data);
  // console.log("Starting info: ", info);
  // console.log("Current Map: ", apiMap);

  const getData = async () => {
    setLoading(true);
    var query = data.pathname.substring(8);
    const url = "https://swapi.dev/api/" + query;
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
  }, [data]);

  return (
    <React.Fragment>
      {isError && <FetchErrorMessage />}
      {isLoading && <Loading />}

      {!isError && !isLoading && (
        <div className="Details">
          <h1 id="title" style={{ alignSelf: "center" }}>
            {info.hasOwnProperty("title") && info.title}
            {info.hasOwnProperty("name") && info.name}
          </h1>
          <img
            src={process.env.PUBLIC_URL + "/logo192.png"}
            alt="Temp"
            style={{
              alignSelf: "center",
              width: "50%",
              maxWidth: "256px",
              minWidth: "128px",
            }}
          ></img>
          {<Glossary info={info} />}
          {<PropertyList info={info} getData={getData} />}
          <a href="#title"> Back to the Top </a>
        </div>
      )}
    </React.Fragment>
  );
}

export default Details;
