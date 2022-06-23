import React from "react";
import SearchBar from "./SearchBar";
import FilmList from "./FilmList";
import Loading from "../common/Loading";
import FetchErrorMessage from "../common/FetchErrorMessage";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isError: false,
      searchTerm: "",
      searchHits: new Array(6).fill(true),
    };
  }

  componentDidMount() {
    console.log("Mounting...");
    this.loadData();
  }

  async loadData() {
    console.log("Getting movie list...");
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

  updateSearchTerm = (newTerm) => {
    this.setState({
      searchTerm: newTerm,
    });
  };

  updateSearchHits = (newHits) => {
    this.setState({
      searchHits: newHits,
    });
  };

  render() {
    if (!this.state.data && !this.state.isError) {
      return <Loading />;
    }

    if (this.state.isError) {
      return <FetchErrorMessage />;
    }
    return (
      <div className="Home">
        <h1>Home</h1>
        <SearchBar
          searchTerm={this.searchTerm}
          onSearchTermChange={this.updateSearchTerm}
          onNewHits={this.updateSearchHits}
          data={this.state.data}
        />
        <FilmList data={this.state.data} hits={this.state.searchHits} />
      </div>
    );
  }
}

export default Home;
