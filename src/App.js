import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Details from "./components/details/Details";
import NoMatch from "./components/common/NoMatch";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/detail/*" element={<Details />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    );
  }
}

export default App;
