import React from "react";
import useWeather from "./utils/useWeather";
import ForcastCard from "./ForcastCard";

const Forecast = () => {
  const data = useWeather();

  return (
    <div className="my-5  glass h-auto">
      <h1 className="text-center text-4xl font-bold m-5">7 days Forecast</h1>
    <div className="border-2 rounded-md flex">
      {data?.forecast?.forecastday?.map((forcastData) => {
        console.log({ forcastData });
        return <ForcastCard {...forcastData} />;
      })}
    </div>
    </div>
  );
};

export default Forecast;
