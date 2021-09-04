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
      
       °C
     
      |
        °F
     
    </span>
  );
}
