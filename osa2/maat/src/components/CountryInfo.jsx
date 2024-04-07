import { useEffect, useState } from "react";
import countryService from "../services/countries";
import "../index.css";
import { Weather } from "./Weather";

export const CountryInfo = ({ countryName }) => {
  const [country, setCountry] = useState({
    capital: "",
    area: "",
    languages: {},
    flag: {},
  });
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    countryService.getOneCountry(countryName).then((response) => {
      setCountry({
        capital: response.capital[0],
        area: response.area,
        languages: response.languages,
        flag: response.flags,
      });
    });
  }, [countryName]);

  useEffect(() => {
    if (country.capital) {
      countryService
        .getWeather(country.capital.toLowerCase())
        .then((response) => {
          console.log(response);
          setWeather(response);
        });
    }
  }, [country.capital]);

  return (
    <>
      <h2>{countryName}</h2>
      <img className="flag" src={country.flag.svg} alt={country.flag.alt} />
      <p>capital: {country.capital}</p>
      <p>area: {country.area}</p>
      <h3>languages:</h3>

      <ul>
        {Object.values(country.languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>

      <Weather weather={weather} country={country} />
    </>
  );
};

// const w = weather ? (
//   <div>
//     <h3>weather in {country.capital}:</h3>

//     <pre>{JSON.stringify(weather, null, 2)}</pre>
//   </div>
// ) : null;

// {
//   weather && <div>blössp</div>;
// }
