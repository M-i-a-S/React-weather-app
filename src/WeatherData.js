import React from "react";
import "./WeatherData.css";

export default function WeatherData(){
    return (
        <div class="WeatherData">
            <h1>
                 <img
      src="http://openweathermap.org/img/wn/10d@2x.png"
      alt="sun.gif"
      className="Sun"
      id="icon"
    />
    <span className="Temp" id="temp-element">
      <span>
        <strong>14 </strong>
        
      </span>
      °C|°F
     </span>
     <div>
      <em className="Description">Few clouds</em>
    </div>
        </h1>
        <div className="Circle1">
      <div className="Circle1-txt-city" id="city">
        
      </div>
      <div className="Circle1-txt-day"></div>
    </div>
    <div className="Circle2">
      <div className="Circle2-txt-wind">
        <strong> Wind: </strong> <span id="wind"></span>
      </div>
      <div className="Circle2-txt-hum">
        <strong> Humidity: </strong>{" "}
        <span id="hum"></span>
      </div>
    </div>


        </div>


    )
}