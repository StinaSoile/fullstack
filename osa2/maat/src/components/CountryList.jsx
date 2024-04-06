export const CountryList = ({ countries, show, setSelected }) => {
  return (
    <ul>
      {countries.map((country) => (
        <li key={country}>
          {country}
          <button
            value={country}
            onClick={() => {
              show(country);
              setSelected(country);
            }}
          >
            show
          </button>
        </li>
      ))}
    </ul>
  );
};
