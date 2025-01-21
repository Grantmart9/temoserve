import React, { useState, useEffect } from "react";

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return timeLeft;
};
