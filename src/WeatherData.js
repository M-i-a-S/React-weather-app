import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./WeatherData.css";

export default function WeatherData(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
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
      icon: "http://openweathermap.org/img/wn/10d@2x.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherData">
        <h1>
          <img
            src={weatherData.icon}
            alt={weatherData.description}
            className="Sun"
            id="icon"
          />
          <span className="Temp" id="temp-element">
            <span>
              <strong>{Math.round(weatherData.temperature)} </strong>
            </span>
            °C|°F
          </span>
          <div className="text-capitalize">
            <em className="Description">{weatherData.description}</em>
          </div>
        </h1>
        <div className="Circle1">
          <div className="Circle1-txt-city" id="city">
            {weatherData.city}
          </div>
          <div className="Circle1-txt-day">
            <FormattedDate date={weatherData.date} />
          </div>
        </div>
        <div className="Circle2">
          <div className="Circle2-txt-wind">
            <strong> Wind: </strong>{" "}
            <span id="wind"> {weatherData.wind} km/h</span>
          </div>
          <div className="Circle2-txt-hum">
            <strong> Humidity: </strong>{" "}
            <span id="hum">{weatherData.humidity}%</span>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "6c19daaca2f5b29c42112f1a349df87f";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
