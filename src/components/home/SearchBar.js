import React from "react";

function SearchBar(props) {
  return (
    <div className="SearchBar">
      <div className="SearchText">Search</div>
      <input
        value={props.searchTerm}
        onChange={props.searchTermChanged}
        name="searchTerm"
        label="searchTerm"
      />
    </div>
  );
}

export default SearchBar;
