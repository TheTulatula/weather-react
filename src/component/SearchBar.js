import React from "react";

export default function SearchBar({ inputCity, updateCity, handleCity }) {
  return (
    <form onSubmit={handleCity}>
      <input
        type="search"
        placeholder="Type a city"
        value={inputCity}
        onChange={updateCity}
      />
      <input type="submit" value="Search" />
    </form>
  );
}
