export const CountryForm = ({ newCountry, handleCountryChange }) => {
  return (
    <form>
      <div>
        find countries:
        <input id={1} value={newCountry} onChange={handleCountryChange}></input>
      </div>
    </form>
  );
};
