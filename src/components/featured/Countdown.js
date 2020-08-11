import React, { useState, useEffect } from "react";
import Slide from "react-reveal/Slide";

const Countdown = ({ deadline }) => {
  const [days, setDays] = useState("0");
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("0");
  const [seconds, setSeconds] = useState("0");
  const [myObject, setMyObject] = useState([
    { name: "Duncan", sport: "walking" },
  ]);

  setMyObject([{ ...myObject, sport: "breast manipulation" }]);

  useEffect(() => {
    setInterval(() => getTimeUntil("Dec, 16, 2020"), 1000);
  }, []);

  useEffect(() => {
    setInterval(() => getTimeUntil("Dec, 16, 2020"), 1000);
  }, [deadline]);

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    // console.log(time);
    if (time < 0) {
      console.log("Date passed");
    } else {
      const Seconds = Math.floor((time / 1000) % 60);
      const Minutes = Math.floor((time / 1000 / 60) % 60);
      const Hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const Days = Math.floor(time / (1000 * 60 * 60 * 24));

      setDays(Days);
      setHours(Hours);
      setMinutes(Minutes);
      setSeconds(Seconds);
    }
  };

  return (
    <Slide left delay={1000}>
      <div className="countdown_wrapper">
        <div className="countdown_top">Event starts in</div>
        <div className="countdown_bottom">
          <div className="countdown_item">
            <div className="countdown_time">{days}</div>
            <div className="countdown_tag">Days</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">{hours}</div>
            <div className="countdown_tag">Hs</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">{minutes}</div>
            <div className="countdown_tag">Mins</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">{seconds}</div>
            <div className="countdown_tag">Secs</div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Countdown;
