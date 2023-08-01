import React from 'react'
import Header from './Header'
import Clock from './Clock'
import LiveWeather from './LiveWeather'
import Forecast from './Forecast'
import Hightlight from './Hightlight'

const App = () => {
  return (
    <div className="border-2 h-auto bg-[#11151c] text-white">
      <Header />
      <div className='grid grid-cols-3'>
        <div>
          <Clock />
          <LiveWeather />
        </div>
          <Hightlight/>
      </div>
      <Forecast />
    </div>
  );
}

export default App