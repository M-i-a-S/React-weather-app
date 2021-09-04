import React from "react";
import "./Circle2.css";

export default function Circle2() {
  let circle2Data = {
    wind: "0 km/h",
    humidity: "48%"
  };
  return (
    <div className="Circle2">
      <div className="Circle2-txt-wind">
        <strong> Wind: </strong> <span id="wind">{circle2Data.wind}</span>
      </div>
      <div className="Circle2-txt-hum">
        <strong> Humidity: </strong>{" "}
        <span id="hum">{circle2Data.humidity}</span>
      </div>
    </div>
  );
}
