import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
export default function WeatherSearch() {
  let [city, setCity] = useState(null);
  let [weather, setWeather] = useState({});

  function displayWeather(response) {
    console.log(response.data.coord);
    setWeather({
      location: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=sydney&appid=4cefc11f1f38ea5cac3c215cbf9217d2&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function citySearched(event) {
    setCity(event.target.value);
  }

  let form = (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city"
          autoFocus="on"
          className="text-input"
          onChange={citySearched}
        />
        <input type="submit" value="Search" className="btn btn-search" />
        <input type="submit" value="Current" className="btn btn-current" />
      </form>
    </div>
  );

  return (
    <div className="weather">
      {form}
      <h1>Sydney ☀️</h1>
      <ul>
        <li>Temperature: {Math.round(weather.temperature)}°C</li>
        <li>Description: {weather.description}</li>
        <li>Humidity: {weather.humidity}%</li>
        <li>Wind: {Math.round(weather.temperature)}km/h</li>
      </ul>
      <div className="forecast">
        <div className="row">
          <div className="col-sm-2 text-center p-2">
            <div className="card">
              <h3>Sat ☀️</h3>
              <p>Min: 17</p>
              <p>Max: 23</p>
            </div>
          </div>
          <div className="col-sm-2 text-center p-2">
            <div className="card">
              <h3>Sun ☀️</h3>
              <p>Min: 16</p>
              <p>Max: 22</p>
            </div>
          </div>
          <div className="col-sm-2 text-center p-2">
            <div className="card">
              <h3>Mon ☀️</h3>
              <p>Min: 14</p>
              <p>Max: 20</p>
            </div>
          </div>
          <div className="col-sm-2 text-center p-2">
            <div className="card">
              <h3>Tue ☀️</h3>
              <p>Min: 14</p>
              <p>Max: 21</p>
            </div>
          </div>
          <div className="col-sm-2 text-center p-2">
            <div className="card">
              <h3>Wed ☀️</h3>
              <p>Min: 10</p>
              <p>Max: 21</p>
            </div>
          </div>
          <div className="col-sm-2 text-center p-2">
            <div className="card">
              <h3>Thu ☀️</h3>
              <p>Min: 12</p>
              <p>Max: 19</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
