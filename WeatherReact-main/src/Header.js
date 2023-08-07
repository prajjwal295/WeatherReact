import React, { useState } from "react";
import Search from "./Search";
import { useDispatch } from "react-redux";
import { setSearch } from "./utils/SearchSlice";

const Header = () => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  const setSearchCity = (city) => {
    console.log(city);
    dispatch(setSearch(city));
  };
  return (
    <div className="flex  justify-between items-center bg-base-300 relative px-4">
      <button className="btn btn-ghost normal-case text-xl">
        Your Weather
      </button>

      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0}>
            <Search setData={setData} />
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content bg-base-100 shadow text-black min-w-[200px]"
            >
              {data ? (
                data?.map((address) => {
                  return (
                    <h1
                      className="font-sm text-lg  ease-in-out hover:bg-slate-100 px-2 py-1"
                      onClick={() => {
                        setSearchCity(address?.name);
                      }}
                    >
                      {address?.name} , {address?.region}
                    </h1>
                  );
                })
              ) : (
                <></>
              )}
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
