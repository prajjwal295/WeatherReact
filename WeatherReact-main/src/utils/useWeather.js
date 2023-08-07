import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useWeather = () => {
  const API_KEY = "e5190dab110c53230960c5d418a527c5";

  const [weather, setWeather] = useState(null);

  const cityName = useSelector((store) => store.search.searchCity);
  console.log({ cityName });

  useEffect(() => {
    getWeatherData();
  }, [cityName]);

  const getWeatherData = async () => {
    const data = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=17ef54ed4de94ecab63131838233107&q=${cityName}&days=7&aqi=yes&alerts=yes
`
    );
    const json = await data.json();
    // console.log(json);
    setWeather(json);
  };

  return weather;
};

export default useWeather;
