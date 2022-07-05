import React, { useEffect, useState } from "react";
import "./Countdown.css"

function Countdown() {
  const [countDown, setCountDown] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      const timeDifference = new Date("11/1/2023") - new Date();
      if (timeDifference > 0) {
        let timeLeft = {
          days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((timeDifference / 1000 / 60) % 60),
          seconds: Math.floor((timeDifference / 1000) % 60),
        };
        setCountDown(timeLeft)
      }
    }, 1000);
    return () => clearTimeout(timer);
  });

console.log(countDown);
  return <section className="countdown section__margin">
    <div>
        <h2>{countDown.days}</h2>
        <p>Days</p>
    </div>
    <div>
        <h2>{countDown.hours}</h2>
        <p>Hours</p>
    </div>
    <div>
        <h2>{countDown.minutes}</h2>
        <p>Minutes</p>
    </div>
    <div>
        <h2>{countDown.seconds}</h2>
        <p>Seconds</p>
    </div>
  </section>;
}

export default Countdown;
