import React from 'react'
import { useEffect , useState } from 'react';

const Clock = () => {
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
      <div className="card w-[90%] glass m-5">
  {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure> */}
  <div className="card-body">
    <h2 className="card-title text-7xl">{timeString}</h2>
    <h2 className="card-title text-4xl">{dateString}</h2>
  </div>
</div>
    );
}

export default Clock


