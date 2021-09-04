import React from "react";
import "./Temp.css";

export default function Temp() {
  let tempData = {
    temp: 14
  };
  return (
    <span className="Temp" id="temp-element">
      <span>
        <strong>{tempData.temp}</strong>
      </span>
      <a href="#" id="celsius-link" className="active">
        °C
      </a>
      |
      <a href="#" id="fahrenheit-link">
        °F
      </a>
    </span>
  );
}
