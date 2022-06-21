import React from "react";
import { Link } from "react-router-dom";

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
    console.log(this.state.data);
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
        <div className="SearchBar">
          <div className="SearchText">Search</div>
          <input
            value={this.state.searchTerm}
            onChange={this.searchTermChanged}
            name="searchTerm"
            label="searchTerm"
          />
        </div>

        {this.state.data.map((movie, i) => {
          return (
            this.state.searchHits[i] && (
              <li key={movie.title}>
                <Link
                  to={{
                    //pathname: "/" + movie.title.replace(/\s/g, ""),
                    pathname: "/" + movie.url.substring(18),
                  }}
                  state={movie}
                >
                  {movie.title}
                </Link>
              </li>
            )
          );
        })}
      </div>
    );
  }
}

export default Home;
