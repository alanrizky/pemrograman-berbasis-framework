import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./Table";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Table />
      </header>
    </div>
  );
}

export default App;
