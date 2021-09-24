import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./Weather5Forecast.css";

export default function Weather5Forecast() {
  return (
    <div className="Weather5Forecast">
      <div className="row">
        <div className="col">
          <div className="Weather5Forecast-day">Thu</div>
          <div className="Weather5Forecast-temperatures">
            <span className="Weather5Forecast-temp-min">8°</span>/
            <span className="Weather5Forecast-temp-max">14° </span>
          </div>
          <div className="Weather5Forecast-icon">
            <WeatherIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
