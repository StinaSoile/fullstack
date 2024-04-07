import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/";
const api_key = import.meta.env.VITE_KEY;

const getAll = () => {
  // haetaan kaikki maiden nimet response.dataksi
  const request = axios.get(`${baseUrl}all`);

  return request.then((response) => response.data);
};

const getOneCountry = (c) => {
  const country = c.toLowerCase();
  const request = axios.get(`${baseUrl}name/${country}`);
  return request.then((response) => response.data);
};

const getWeather = (city) => {
  const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
  const request = axios.get(queryURL)
  return request.then((response) => response.data)
}

export default { getAll, getOneCountry, getWeather };

