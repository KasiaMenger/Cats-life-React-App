import React from "react";
import "./PresentDate.css";

export default function PresentDate({ data }) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const presentDate = data.date.getDate();
  const weekDays = days[data.date.getDay()];
  const month = months[data.date.getMonth()];
  let hours = data.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = data.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="present">
    <div className="presentDate">
        {weekDays}, {month} {presentDate}
      </div>
      <div className="presentTime">
  Time{" "}{hours}:{minutes}
      </div>
    </div>
  );
}
