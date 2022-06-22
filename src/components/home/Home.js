import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import FilmList from "./FilmList";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isError: false,
      searchTerm: "",
      searchHits: [true, true, true, true, true, true],
    };
    this.searchTermChanged = this.searchTermChanged.bind(this);
    this.getAllInstances = this.getAllInstances.bind(this);
  }

  componentDidMount() {
    console.log("Mounting...");
    this.loadData();
  }

  async loadData() {
    try {
      let result = await fetch("https://swapi.dev/api/films/");
      let data = await result.json();
      this.setState({ data: data.results });
      console.log(data);
    } catch (err) {
      console.error(err);
      this.setState({ isError: true });
    }
  }

  searchTermChanged(event) {
    var value = event.target.value;
    this.setState({
      searchTerm: value,
      searchHits: this.getAllInstances(value),
    });
    //console.log("Search Term: ", this.state.searchTerm);
    //console.log("Found Indices: ", this.state.searchHits);
  }

  getAllInstances(val) {
    var indexes = [];
    var i = 0;
    while (i < this.state.data.length) {
      if (
        this.state.data[i].title.toLowerCase().includes(val.toLowerCase()) ||
        this.state.data[i].opening_crawl
          .toLowerCase()
          .includes(val.toLowerCase())
      )
        indexes.push(true);
      else indexes.push(false);
      i++;
    }
    return indexes;
  }

  render() {
    if (!this.state.data && !this.state.isError) {
      return <div>Loading...</div>;
    }

    if (this.state.isError) {
      return <div>Error encountered. Try again later.</div>;
    }
    return (
      <div>
        <h1>Home</h1>
        <SearchBar
          searchTerm={this.searchTerm}
          searchTermChanged={this.searchTermChanged}
        />
        <FilmList data={this.state.data} hits={this.state.searchHits} />
      </div>
    );
  }
}

export default Home;
