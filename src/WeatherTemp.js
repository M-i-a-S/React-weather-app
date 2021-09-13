import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemp" id="temp-element">
        <span>
          <strong>{Math.round(props.celsiusTemp)} </strong>
        </span>
        °C|
        <a href="/" onClick={showFahrenheit}>
          °F{" "}
        </a>
      </span>
    );
  } else {
    let fahrenheit = props.celsiusTemp * 1.8 + 32;
    return (
      <span className="WeatherTemp" id="temp-element">
        <span>
          <strong>{Math.round(fahrenheit)} </strong>
        </span>
        <a href="/" onClick={showCelsius}>
          °C
        </a>
        |°F{" "}
      </span>
    );
  }
}
