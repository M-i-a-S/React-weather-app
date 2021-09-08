import React from 'react';
import ReactDOM from 'react-dom';
import WeatherData from './WeatherData';
import Form from "./Form";
import Coder from "./Coder";
import 'bootstrap/dist/css/bootstrap.css';

import reportWebVitals from './reportWebVitals';

import "./App.css";

function App() {
  return (
    <div className="Container">
      <div className="App">
        
        <WeatherData />

        <Form />

        <hr className="line" />
        <div className="days" id="forecast"></div>

        <Coder />
      </div>
    </div>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
