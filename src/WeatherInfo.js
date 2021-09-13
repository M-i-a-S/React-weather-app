import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        <img
          src={props.data.icon}
          alt={props.data.description}
          className="Sun"
          id="icon"
        />
        <WeatherTemp celsiusTemp={props.data.temperature} />

        <div className="text-capitalize">
          <em className="Description">{props.data.description}</em>
        </div>
      </h1>
      <div className="Circle1">
        <div className="Circle1-txt-city" id="city">
          {props.data.city}
        </div>
        <div className="Circle1-txt-day">
          <FormattedDate date={props.data.date} />
        </div>
      </div>
      <div className="Circle2">
        <div className="Circle2-txt-wind">
          <strong> Wind: </strong>{" "}
          <span id="wind"> {props.data.wind} km/h</span>
        </div>
        <div className="Circle2-txt-hum">
          <strong> Humidity: </strong>{" "}
          <span id="hum">{props.data.humidity}%</span>
        </div>
      </div>
    </div>
  );
}
