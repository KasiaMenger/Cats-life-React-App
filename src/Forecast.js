import React, { useState } from "react";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";

export default function Forecast({ city, unit}) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && city === forecast.city.name) {
    return (
      <div className="row">
        {forecast.list.slice(0, 5).map(function (forecastItem) {
          return <WeatherForecast data={forecastItem} unit={unit}  />;
        })}
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=749810e34b6703478a9c495fcd73dc8a&units=metric`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}
