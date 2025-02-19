import react from "react";
import axios from "axios";
import { useState } from "react";

export function Weather(props) {
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function showWeatherData(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }

  let ApiKey = "a969311cfcbb4a83dfad2cf7478397f9";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${ApiKey}&units=metric`;
  axios.get(url).then(showWeatherData);

  if (temperature) {
    return (
      <div>
        <ul>
          <li>City: {props.city}</li>
          <li>Temperature: {Math.round(temperature)}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind} km/h</li>
        </ul>
        <img
          src={`http://openweathermap.org/img/wn/${icon}.png`}
          alt={description}
        />
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
}
