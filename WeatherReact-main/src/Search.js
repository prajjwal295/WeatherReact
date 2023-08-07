import React, { useEffect, useState } from "react";

const Search = ({ setData }) => {
  const [searchValue, setSearchValue] = useState(null);
  const [result, setResult] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchValue) {
        searchApi();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchValue]);

  const searchApi = async () => {
    const data = await fetch(
      `http://api.weatherapi.com/v1/search.json?key=17ef54ed4de94ecab63131838233107&q=${searchValue}`
    );
    const json = await data.json();

    console.log(json);
    setResult(json);
    setData(json);
  };
  return (
    <div className="form-control text-xs m-2 col-span-3 w-[90%] relative h-12 ">
      <div className="absolute right-0 text-black">
        <input
          type="text"
          value={searchValue}
          placeholder="Enter the City"
          className=" input input-bordered md:w-auto"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        {/* <button className="btn btn-outline">Search</button> */}
      </div>
    </div>
  );
};

export default Search;
