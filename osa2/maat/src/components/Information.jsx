import { CountryInfo } from "./CountryInfo";
import { CountryList } from "./CountryList";

export const Information = ({ countries }) => {
  if (countries.length == 1) {
    return <CountryInfo countries={countries} />;
  }
  if (countries.length <= 10) {
    return <CountryList countries={countries} />;
  } else return <p>Too many matches, specify another filter</p>;
};
