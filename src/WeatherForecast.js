import React from "react";
import "./WeatherForecast.css";
import ForecastIcon from "./ForecastIcon";

export default function WeatherForecast({ data, unit}) {

  function hours() {
    let date = new Date(data.dt * 1000);
    let hours = date.getHours();
    return `Time: ${hours}h00`;
  }

  function maxTemperature() {
    let maxTemperature = Math.round(data.main.temp_max);
    return `${maxTemperature}`;
  }

  function minTemperature() {
    let minTemperature = Math.round(data.main.temp_min);
    return `${minTemperature}`;
  }

 if (unit === "celsius") {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <div className="weatherSymbols">
            <ForecastIcon code={data.weather[0].icon} />
          </div>
          <br />
          <strong>{hours()}</strong>
          <br />
          <br />
          <div className="temperature">
            <span className="maxTemperature">Max {maxTemperature()}</span>℃ /
            <span className="minTemperature">Min {minTemperature()}</span>℃ 
          </div>
        </div>
      </div>
    </div>
  );
} else {
  let maxTemperatureFahrenheit = Math.round(((maxTemperature()) * 9) / 5 + 32);
  let minTemperatureFahrenheit = Math.round(((minTemperature()) * 9) / 5 + 32); 

  return(
     <div className="col">
      <div className="card">
        <div className="card-body">
          <div className="weatherSymbols">
            <ForecastIcon code={data.weather[0].icon} />
          </div>
          <br />
          <strong>{hours()}</strong>
          <br />
          <div className="temperature">
            <span className="maxTemperature"> {maxTemperatureFahrenheit}</span>℃ /
            <span className="minTemperature"> {minTemperatureFahrenheit}</span>℃
          </div>
        </div>
      </div>
    </div>
  );
}
}
