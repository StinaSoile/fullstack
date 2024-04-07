import countryService from "../services/countries";

export const Weather = ({ weather, country }) => {
  if (weather !== null) {
    const celsius = Math.round((weather.main.temp - 273.15) * 100) / 100;

    return (
      <div>
        <h3>weather in {country.capital}:</h3>
        <p>temperature: {celsius} Celsius</p>
        <img
          className="weather"
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={"erw"}
          style={{
            width: "100px",
          }}
        />

        <p>wind: {weather.wind.speed} m/s</p>
      </div>
    );
  }
};
