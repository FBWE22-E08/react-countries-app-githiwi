import React, { useEffect, useState } from "react";
import CountryCard from "../CountryCard";

export default function ByRegion() {
  //save the user input in the pre-made local state (region), then fetch all countries of that region on page load and make sure it gets executed every time the state (region) changes (what hook should you use for that? and what should you add to it?) then save the received array of countries in a local state (call it countries)

  const [region, setRegion] = useState("Africa");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/region/" + region)
      .then((response) => response.json())
      .then((data) => setCountries(data)).catch((error)=>{
        console.error('something went wrong',error)
      })

    console.log("fetch", region);
  }, [region]);

  const handleChange = (e) => {
    console.log('clikiiii',e.target.value)
    setRegion(e.target.value);
    console.log("hhhhhhhh",region)
  };

  return (
    <div>
      <input
        type={"radio"}
        name="region"
        defaultChecked
        value="Africa"
        onClick={handleChange}
      />
      <label style={{ marginRight: "15px" }}>Africa</label>
      <input
        type={"radio"}
        name="region"
        value="America"
        onClick={handleChange}
      />
      <label style={{ marginRight: "15px" }}>America</label>
      <input
        type={"radio"}
        name="region"
        value="Asia"
        onClick={handleChange}
      />
      <label style={{ marginRight: "15px" }}>Asia</label>
      <input
        type={"radio"}
        name="region"
        value="Europe"
        onClick={handleChange}
      />
      <label style={{ marginRight: "15px" }}>Europe</label>
      <input
        type={"radio"}
        name="region"
        value="Oceania"
        onClick={handleChange}
      />
      <label>Oceania</label>

      <div className="cardsContainer">
      {countries.map((country)=>(
        <p>{<CountryCard country={country}/>}</p>
      ))}

        {/* show the countries you received from fetch and saved in the local state (use CountryCard component to display each individual one) */}
      </div>
    </div>
  );
}
