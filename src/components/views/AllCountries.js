import React, { useState, useEffect } from "react";
import CountryCard from "../CountryCard";

export default function AllCountries() {
  // fetch all countries on page load (what hook should you use for that?) then save the received array of countries in a local state (call it countries)
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(" https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="cardsContainer">
      
      {/* show the countries you received from fetch and saved in the local state (use CountryCard component to display each individual one) */}
      {countries.map((country)=>(
        <p>{<CountryCard country={country}/>}</p>
      ))}
    </div>
  );
}
