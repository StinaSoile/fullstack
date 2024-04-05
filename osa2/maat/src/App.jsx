import { useEffect, useState } from "react";
import countryService from "./services/countries";
import { CountryForm } from "./components/CountryForm";
import { Information } from "./components/Information";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newCountry, setNewCountry] = useState("");

  const countriesToShow = countries.filter((country) =>
    country.toLowerCase().includes(newCountry.toLowerCase())
  );

  useEffect(() => {
    countryService.getAll().then((data) => {
      const fetchedCountries = data.map((data) => data.name.common);
      setCountries(fetchedCountries);
    });
  }, []);

  const handleCountryChange = (event) => {
    setNewCountry(event.target.value);
  };

  const show = (country) => {
    setNewCountry(country);
  };
  return (
    <div>
      <CountryForm
        newCountry={newCountry}
        handleCountryChange={handleCountryChange}
      />
      <Information countries={countriesToShow} show={show} />
    </div>
  );
};

export default App;
