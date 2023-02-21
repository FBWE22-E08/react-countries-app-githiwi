import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import CountryCard from "../CountryCard";
import AllCountries from "./AllCountries";

export default function OneCountry() {
  let { code } = useParams();
  const [singleCountry, setSingleCountry] = useState({});
  console.log(singleCountry);
  useEffect(() => {
    fetch(`https://restcountries.com/v2/alpha/${code}`)
      .then((response) => response.json())
      .then((data) => setSingleCountry(data));
  }, [code]);
  return (
    <div  style={{border:"3px solid pink",boxShadow:" 10px 5px 5px red"}}>
      <h1>Country name- {singleCountry.name}</h1>
      <h2>Population-{singleCountry.population}</h2>
      <h2>Area-{singleCountry.area}</h2>
      <h2>Capital-{singleCountry.capital}</h2>
     
      <h2>Region-{singleCountry.region}</h2>

      <h2>Subregion-{singleCountry.subregion}</h2>
      <h2>Time zone-{singleCountry.timezones}</h2>
      <h2>{singleCountry.demonym}</h2>
      
      <h2>{singleCountry.latlng}</h2>
     
      


    </div>
  );
}
