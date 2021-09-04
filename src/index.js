import React from 'react';
import ReactDOM from 'react-dom';
import ImageSun from "./ImageSun";
import Temp from "./Temp";
import Description from "./Description";
import Circle1 from "./Circle1";
import Circle2 from "./Circle2";
import Form from "./Form";
import Coder from "./Coder";

import reportWebVitals from './reportWebVitals';

import "./App.css";

function App() {
  return (
    <div className="Container">
      <div className="App">
        <h1>
          <ImageSun />
          <Temp />
          <Description />
        </h1>

        <Circle1 />

        <Circle2 />

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
