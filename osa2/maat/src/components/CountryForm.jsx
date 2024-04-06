export const CountryForm = ({ searchedText, handleCountryChange }) => {
  return (
    <form>
      <div>
        find countries:
        <input
          autoComplete="off"
          value={searchedText}
          onChange={handleCountryChange}
        ></input>
      </div>
    </form>
  );
};
