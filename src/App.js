import "./App.css";
import React from "react";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import Details from "./components/details/Details";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/*" element={<Details />} />
          </Routes>
        </header>
      </div>
    );
  }
}

export default App;
