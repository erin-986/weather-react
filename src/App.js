import React from "react";
import "./App.css";
import DayDate from "./DayDate";
import Search from "./Search";
function App() {
  return (
    <div className="App">
      <DayDate />
      <Search />
      <p className="tag">
        This app was coded by Erin Sladen and is{" "}
        <a href="https://github.com/erin-986/weather-react">open-sourced</a>
      </p>
    </div>
  );
}

export default App;
