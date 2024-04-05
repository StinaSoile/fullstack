export const CountryList = ({ countries, show }) => {
  return (
    <ul>
      {countries.map((country) => (
        <li key={country}>
          {country}
          <button
            onClick={() => {
              show(country);
            }}
          >
            show
          </button>
        </li>
      ))}
    </ul>
  );
};
