import React from "react";
import "./Info.css";

export default function Info({ data }) {  
  return (
<div className="Info">
<div className="weatherDescription"> {data.description}</div>
<ul className="dayInfo">
<li>
<span className="emojiInfo"> Humidity
</span>
<span>{data.humidity} %</span>
</li>
<li>
<span className="emojiInfo">Wind</span>
<span>{Math.round(data.wind * 3.6)} km/h</span>
</li>
<br />
</ul>
    </div>
  );
}
