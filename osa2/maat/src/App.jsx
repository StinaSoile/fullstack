import { useEffect, useState } from "react";
import countryService from "./services/countries";
import { CountryForm } from "./components/CountryForm";
import { Information } from "./components/Information";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchedText, setSearchedText] = useState("");
  const [selectedCountry, setSelected] = useState(null);

  const getFilteredCountries = (cc) => {
    return cc.filter((country) =>
      country.toLowerCase().includes(searchedText.toLowerCase())
    );
  };

  useEffect(() => {
    countryService.getAll().then((data) => {
      const fetchedCountries = data.map((data) => data.name.common);
      setCountries(fetchedCountries);
    });
  }, []);

  const handleCountryChange = (event) => {
    const v = event.target.value;
    setSearchedText(v);

    console.log("a");

    const cc = countries.filter((c) =>
      c.toLowerCase().includes(v.toLowerCase())
    );

    if (cc.length === 1) {
      setSelected(cc[0]);
    } else {
      setSelected(null);
    }
  };

  // useEffect(() => {
  //   console.log("b");

  //   const cc = getFilteredCountries(countries);

  //   if (cc.length === 1) {
  //     setSelected(cc[0]);
  //   } else {
  //     setSelected(null);
  //   }
  // }, [searchedText]);

  // useEffect(() => {
  //   console.log("c");
  // }, [selectedCountry]);

  const show = (country) => {
    setSearchedText(country);
  };
  return (
    <div>
      <CountryForm
        searchedText={searchedText}
        handleCountryChange={handleCountryChange}
      />
      <Information
        selectedCountry={selectedCountry}
        setSelected={setSelected}
        countries={getFilteredCountries(countries)}
        show={show}
      />
    </div>
  );
};

export default App;
