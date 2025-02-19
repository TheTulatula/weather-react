import "./App.css";
import React, { useState } from "react";
import SearchBar from "./component/SearchBar";
import { Weather } from "./component/Weather";

export default function App() {
  const [inputCity, setInputCity] = useState("");
  const [city, setCity] = useState("");

  function updateCity(event) {
    setInputCity(event.target.value);
  }
  function handleCity(event) {
    event.preventDefault();
    setCity(inputCity);
  }

  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <SearchBar
        inputCity={inputCity}
        updateCity={updateCity}
        handleCity={handleCity}
      />
      <Weather city={city} />
    </div>
  );
}
