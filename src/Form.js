import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <form className="Search-bar">
      <input
        type="text"
        placeholder="Enter a city"
        id="search-city"
        autocomplete="off"
      />
      <input type="submit" value="Search" id="submit-button" />
      <input type="button" value="Current" id="current-button" />
    </form>
  );
}
