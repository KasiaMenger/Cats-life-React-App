import React from "react";
import "./WeatherIcon.css";
import sun from "./images/sun.png";
import moon from "./images/moon.png";
import sunCloud from "./images/sun-small-cloud.png";
import moonCloud from "./images/moon-cloud.png";
import sunBigCloud from "./images/sun-big-cloud.png";
import cloud from "./images/cloud.png";
import brokenClouds from "./images/broken-clouds.png";
import showerRain from "./images/shower-rain.png";
import sunCloudRain from "./images/sun-cloud-rain.png";
import cloudRain from "./images/cloud-rain.png";
import thunderCloud from "./images/thunder-cloud-rain.png";
import snow from "./images/cloud-snow.png";
import fog from "./images/fog.png";

export default function WeatherIcon({ code, alt }) {
  const codeMapping = {
    "01d": sun,
    "01n": moon,
    "02d": sunCloud,
    "02n": moonCloud,
    "03d": sunBigCloud,
    "03n": cloud,
    "04d": brokenClouds,
    "04n": brokenClouds,
    "09d": showerRain,
    "09n": showerRain,
    "10d": sunCloudRain,
    "10n": cloudRain,
    "11d": thunderCloud,
    "11n": thunderCloud,
    "13d": snow,
    "13n": snow,
    "50d": fog,
    "50n": fog,
  };

  return (
    <div className="row">
      <div className="col-4 clearfix"></div>
      <img src={codeMapping[code]} alt={alt} className="bigSymbol" />
    </div>
  );
}
