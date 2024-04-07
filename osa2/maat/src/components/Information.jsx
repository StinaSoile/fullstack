import { useState } from "react";
import { CountryInfo } from "./CountryInfo";
import { CountryList } from "./CountryList";

export const Information = ({
  countries,
  show,
  selectedCountry,
  setSelected,
}) => {
  if (selectedCountry) {
    return <CountryInfo countryName={selectedCountry} />;
  }
  if (countries.length <= 10) {
    return (
      <CountryList
        setSelected={setSelected}
        countries={countries}
        show={show}
      />
    );
  } else return <p>Too many matches, specify another filter</p>;
};
