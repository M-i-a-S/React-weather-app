import axios from "axios";
import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

import "./Weather5Forecast.css";

export default function Weather5Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    console.log(response);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "6c19daaca2f5b29c42112f1a349df87f";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="Weather5Forecast">
        <div className="row">
          {forecast.map(function (dailyWeather, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyWeather} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}
