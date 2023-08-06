import React from 'react'

const Search = () => {
  return (
    <div className="form-control text-xs m-2 col-span-3 w-[90%] relative h-12 ">
      <div className='absolute right-0 '>
      <input type="text" placeholder="Enter the City" className=" input input-bordered md:w-auto" />
      {/* <button className="btn btn-outline">Search</button> */}
      </div>
    </div>
  )
}

export default Search