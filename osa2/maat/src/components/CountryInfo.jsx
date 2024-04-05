import { useEffect, useState } from "react";
import countryService from "../services/countries";
import "../index.css";

export const CountryInfo = ({ countries }) => {
  const [country, setCountry] = useState({
    capital: "",
    area: "",
    languages: {},
    flag: {},
  });
  useEffect(() => {
    countryService.getOne({ countries }).then((response) => {
      setCountry({
        capital: response.capital[0],
        area: response.area,
        languages: response.languages,
        flag: response.flags,
      });
    });
  }, []);
  return (
    <>
      <h2>{countries}</h2>
      <p>capital: {country.capital}</p>
      <p>area: {country.area}</p>
      <p>languages:</p>
      <ul>
        {Object.values(country.languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <img className="flag" src={country.flag.svg} alt={country.flag.alt} />
    </>
  );
};
