import React from "react";

const ForcastCard = ({ aestro, day }) => {
  console.log({ day });
  return (
    <div className="card shadow-2xl bg-[#11151c] w-72 ml-5">
      <div className="card-body">
        <div className="card-actions justify-center">
        <figure><img src={day?.condition?.icon} /></figure>
        </div>
        <div className="card-actions justify-center">
        <h1>{day?.maxtemp_c}°/{day?.mintemp_c}°</h1>
        </div>
      </div>
    </div>
  );
};

export default ForcastCard;



