import React from "react";

export default function WeatherForecastDay(props) {
  console.log(props.data);
  return (
    <div>
      <div className="Weather5Forecast-day">{props.data.dt}</div>
      <div className="Weather5Forecast-temperatures">
        <span className="Weather5Forecast-temp-min">
          {Math.round(props.data.temp.min)}°
        </span>
        /
        <span className="Weather5Forecast-temp-max">
          {Math.round(props.data.temp.max)}°
        </span>
      </div>
      <div className="Weather5Forecast-icon">
        <img
          src={props.data.weather.icon}
          alt={props.data.description}
        />
      </div>
    </div>
  );
}
