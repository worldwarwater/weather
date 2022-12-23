// weather api
import axios from "axios";
const url = "https://api.openweathermap.org/data/2.5/weather";

const key = "39e85e7a40ec8d9f351a123047be48a2";

const fetchWeather = async (query) => {
  const { data } = await axios.get(url, {
    params: {
      q: query,
      units: "metric",
      appid: key,
    },
  });
  return data;
};

export default fetchWeather;
