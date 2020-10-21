import React from "react";
import "./ConvertUnit.css";

export default function ConvertUnit({
  temp,
  dayMaxTemp,
  dayMinTemp,
  unit,
  setUnit,
}) {
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (temp * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="ConvertUnit">
        <h2>{Math.round(temp)}</h2>
        <div className="units">
          <a href="#/" className="degrees active">
            °C
          </a>
          <span className="bar">|</span>
          <a href="#/" className="fahrenheit" onClick={showFahrenheit}>
            °F
          </a>
        </div>
        <div className="dayTemperature" width="100px">
          <span className="dayMaxTemperature">{Math.round(dayMaxTemp)}°</span>
          <span className="dayMinTemperature">
            {" "}
            / {Math.round(dayMinTemp)}℃
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h2>{Math.round([fahrenheit()])}</h2>
        <div className="units">
          <a href="#/" className="degrees" onClick={showCelsius}>
            °C
          </a>
          <span className="bar">|</span>
          <a href="#/" className="fahrenheit active">
            °F
          </a>
        </div>
        <div className="dayTemperature" width="100px">
          <span className="dayMaxTemperature">
            {Math.round((dayMaxTemp * 9) / 5 + 32)}℉
          </span>
          <span className="dayMinTemperature">
            {" "}
            / {Math.round((dayMinTemp * 9) / 5 + 32)}℉
          </span>
        </div>
      </div>
    );
  }
}
