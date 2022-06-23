import React from "react";

function SearchBar(props) {
  const searchTermChanged = (event) => {
    var value = event.target.value;
    props.onSearchTermChange(value);
    getAllInstances(value);
    //console.log("Current Search Term: ", value);
  };

  const getAllInstances = (val) => {
    var indexes = [];
    var i = 0;
    while (i < props.data.length) {
      if (
        props.data[i].title.toLowerCase().includes(val.toLowerCase()) ||
        props.data[i].opening_crawl.toLowerCase().includes(val.toLowerCase())
      )
        indexes.push(true);
      else indexes.push(false);
      i++;
    }
    props.onNewHits(indexes);

    //console.log("Hits: ", indexes);
  };

  return (
    <div className="SearchBar">
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
