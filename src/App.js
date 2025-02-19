import "./App.css";
import React, { useState } from "react";

import { Weather } from "./component/Weather";

export default function App() {
  const [inputCity, setInputCity] = useState("");
  const [city, setCity] = useState("");

  function updateCity(event) {
    setInputCity(event.target.value);
  }
  function handleCity(event) {
    event.preventDefault();
    if (inputCity) {
      setCity(inputCity);
    } else {
      alert("Please enter a valid city name!");
    }
  }

  return (
    <div className="App">
      <h1>Weather Search Engine</h1>

      <Weather city={city} />
    </div>
  );
}
