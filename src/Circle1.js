import React from "react";
import "./Circle1.css";

export default function Circle1() {
  let circle1Data = {
    city: "Slavonski Brod",
    date: "Wednesday 15:34"
  };
  return (
    <div className="Circle1">
      <div className="Circle1-txt-city" id="city">
        {circle1Data.city}
      </div>
      <div className="Circle1-txt-day">{circle1Data.date}</div>
    </div>
  );
}
