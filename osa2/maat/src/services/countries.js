import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/";

const getAll = () => {
  // haetaan kaikki maiden nimet response.dataksi
  const request = axios.get(`${baseUrl}all`);

  return request.then((response) => response.data);
};

const getOne = ({ countries }) => {
  const country = countries[0].toLowerCase();
  const request = axios.get(`${baseUrl}name/${country}`);
  return request.then((response) => response.data);
};

export default { getAll, getOne };
