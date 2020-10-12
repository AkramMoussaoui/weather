import React, { useState } from "react";
import axios from "../axios";
import useWeather from "../hooks/useWeather";
import requests from "../requests";
import Spinner from "./Spinner";
import WeatherCard from "./WeatherCard";

const Weather = () => {
  const [city, setCity] = useState("algiers");
  const [click, setClick] = useState(false);

  const getWeather = () => {
    return axios.get(`${requests.weather}&q=${city}`);
  };

  const [data, loading, error] = useWeather(getWeather, click);

  return (
    <div>
      <input onChange={(e) => setCity(e.target.value)} value={city} />
      <button onClick={(e) => setClick(true)}>Get</button>
      {loading ? <Spinner /> : ""}
      {data ? <WeatherCard /> : ""}
      {error ? "error" : ""}
    </div>
  );
};

export default Weather;
