import React from 'react'
import { BiWind } from 'react-icons/bi';
import { BsSun } from 'react-icons/bs';
import { WiHumidity } from 'react-icons/wi';
import { GiInvisible } from 'react-icons/gi';

function Hightlight() {
  return (
    <div className="card glass col-span-2 w-[105%] m-5">
        <div className=''>
        <h2 className="card-title font-bold m-5 text-4xl">Highlights</h2>
        </div>
        <div className="card-body grid grid-cols-2">

            <div className="card w-80 bg-[#11151c] shadow-xl mr-1">
              <div className="card-body">
                <h2 className="card-title text-7xl"><BiWind/></h2>
                <p></p>
              </div>
            </div>
            <div className="card w-80 bg-[#11151c] shadow-xl mr-1">
              <div className="card-body">
                <h2 className="card-title text-7xl"><BsSun/>.</h2>
                <p></p>
              </div>
            </div>
            <div className="card w-80 bg-[#11151c] shadow-xl mr-1">
              <div className="card-body">
                <h2 className="card-title text-7xl"><WiHumidity/></h2>
                <p></p>
              </div>
            </div>
            <div className="card w-80 bg-[#11151c] shadow-xl mr-1">
              <div className="card-body">
                <h2 className="card-title text-7xl"><GiInvisible/></h2>
                <p></p>
              </div>
            </div>
  </div>
</div>
  )
}

export default Hightlight