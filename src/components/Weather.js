import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";

const Weather = () => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("algiers");
  const [click, setClick] = useState(false);

  useEffect(() => {
    setClick(false);
    const getWeather = async () => {
      const response = await axios.get(`${requests.weather}&q=${city}`);
      setWeather(response.data);
    };
    getWeather();
  }, [click]);

  return (
    <div>
      <input onChange={(e) => setCity(e.target.value)} value={city} />
      <button onClick={(e) => setClick(true)}>Get</button>
      {weather.weather ? (
        <img src={`${requests.img}${weather.weather[0].icon}.png`} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Weather;
