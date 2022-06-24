import React from "react";

function SearchBar(props) {
  const searchTermChanged = (event) => {
    var value = event.target.value;
    props.onSearchTermChange(value);
    getAllInstances(value);
    //console.log("Current Search Term: ", value);
  };

  const getAllInstances = (val) => {
    let indexes = [];

    for (let i = 0; i < props.data.length; i++) {
      let searching = props.data[i];
      if (
        searching.title.toLowerCase().includes(val.toLowerCase()) ||
        searching.opening_crawl.toLowerCase().includes(val.toLowerCase())
      )
        indexes.push(true);
      else indexes.push(false);
    }
    props.onNewHits(indexes);

    //console.log("Hits: ", indexes);
  };

  return (
    <div className="SearchBar" style={{ margin: "1rem" }}>
      <div className="SearchText">Search</div>
      <input
        value={props.searchTerm}
        onChange={searchTermChanged}
        name="searchTerm"
        label="searchTerm"
      />
    </div>
  );
}

export default SearchBar;
