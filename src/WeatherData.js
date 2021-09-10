import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./WeatherData.css";

export default function WeatherData(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityValue(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "6c19daaca2f5b29c42112f1a349df87f";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherData">
        <form onSubmit={handleSubmit} id="Search-bar">
          <input
            type="search"
            placeholder="Enter a city"
            id="search-city"
            autoComplete="off"
            onChange={handleCityValue}
          />
          <input type="submit" value="Search" id="submit-button" />
          <input type="button" value="Current" id="current-button" />
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
