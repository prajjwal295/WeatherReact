import React, { useState, useEffect } from "react";
import axios from "axios";

// A component that displays the current time, date, and location
function Clock({ location }) {
  const [time, setTime] = useState(new Date());

  // Update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format the time and date
  const timeString = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const dateString = time.toLocaleDateString([], {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="flex flex-col items-center p-2">
      <p className="text-6xl">{timeString}</p>
      <p className="text-3xl">{dateString}</p>
      <p className="text-xl">{location}</p>
    </div>
  );
}

// A component that displays the current temperature and weather conditions
function CurrentWeather({ temp, condition }) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-9xl">{temp}°C</p>
      <p className="text-5xl">{condition}</p>
    </div>
  );
}

// A component that displays the forecast for a single day
function ForecastItem({ day, high, low, condition }) {
  return (
    <div className="flex flex-col items-center">
      <p className="font-bold">{day}</p>
      <p className="text-orange-500">{high}°C</p>
      <p className="text-white">{low}°C</p>
      <p>{condition}</p>
    </div>
  );
}

// A component that displays the forecast for the next 7 days
function ForecastList({ forecast }) {
        // console.log({ forecast });
  return (
    <div className="grid grid-cols-7">

      {forecast?.map((item) => (
        <ForecastItem key={item?.day} {...item} />
      ))}
    </div>
  );
}

// A component that displays the weather forecast widget
function App() {
  const API_KEY = "89852f15bebd043e42effdd09d6aef37";
  const [weather, setWeather] = useState(null);

  // Fetch the weather data from an API
  useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.openweathermap.org/data/2.5/onecall?lat=28.6542&lon=77.2373&units=metric&exclude=minutely,hourly&appid=${apiKey}`
  //     )
  //     .then((response) => {
  //       // Extract the relevant data from the response
  //       const data = response.data;
  //       const location = data.timezone;
  //       const temp = data.current.temp;
  //       const condition = data.current.weather[0].main;
  //       const forecast = data.daily.slice(1).map((day) => ({
  //         day: new Date(day.dt * 1000).toLocaleDateString([], {
  //           weekday: "short",
  //         }),
  //         high: day.temp.max,
  //         low: day.temp.min,
  //         condition: day.weather[0].main,
  //       }));
  //       // Set the weather state
  //       setWeather({ location, temp, condition, forecast });
  //     })
  //     .catch((error) => {
  //       // Handle the error
  //       console.error(error);
  //     });

  const API_URL = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid=${API_KEY}`;
   fetch(API_URL)
            .then(Response => Response.json())
            .then(data => {
              console.log(data);
              const location = data?.timezone;
              const temp = data?.main?.temp;
              const condition = data?.weather?.[0]?.main;
              const forecast = data?.daily?.slice(1)?.map((day) => ({
                      day: new Date(day?.dt * 1000)?.toLocaleDateString([], {
                        weekday: "short",
                      }),
                      high: day?.temp?.max,
                      low: day?.temp?.min,
                      condition: day?.weather?.[0]?.main,
                    }));
                    // Set the weather state
                    setWeather({ location, temp, condition, forecast });
                  })

                  //  console.log({ forecast });
            
  }, []);

 

  // Render the widget if the weather data is available
  if (weather) {
    return (
      <div className="w-full h-[100vh] bg-black text-white font-sans rounded-lg shadow-lg">
        <Clock location={weather?.location} />
        <CurrentWeather temp={weather?.temp} condition={weather?.condition} />
        <ForecastList forecast={weather?.forecast} />
      </div>
    );
  } else {
    // Render a loading message otherwise
    return <div className="text-center">Loading...</div>;
  }
}

export default App;
