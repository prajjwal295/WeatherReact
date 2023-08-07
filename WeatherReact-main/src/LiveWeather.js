import React from "react";
import useWeather from "./utils/useWeather";

const LiveWeather = () => {
  const data = useWeather();

  return (
    <div className="card w-[90%] glass flex m-5">
      <figure>
        <img className="h-32" src={data?.current?.condition?.icon} />
      </figure>
      <div className="card-body">
        <div className="card-actions justify-center">
          <h2 className="card-title text-8xl">{data?.current?.temp_c} °C</h2>
        </div>
        <div className="card-actions justify-center">
          <h2 className="card-title">{data?.current?.condition?.text}</h2>
        </div>
        <div className="card-actions justify-center">
          <h2>{data?.location?.country}</h2>
          <h2 className="mr-2">{data?.location?.name}</h2>
          <h2>{data?.location?.region}</h2>
        </div>
      </div>
    </div>
  );
};

export default LiveWeather;
