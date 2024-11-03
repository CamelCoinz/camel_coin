import { useState, useEffect } from "react";

const Countdown = () => {
  const targetDate = new Date("2024-11-13T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set client-side rendering flag to true
    setIsClient(true);

    // Start countdown interval
    const countdownInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  // Only render the countdown if `isClient` is true
  if (!isClient) {
    return null; // or a loading spinner if you'd like
  }

  return (
    <div className="flex gap-2 lg:gap-5 justify-center lg:justify-around">
      {/* Days */}
      <div className="text-center">
        <div className="bg-[#CF5F1D] border-[3px] p-2 md:p-3 border-clock_border text-3xl md:text-4xl font-bold flex items-center justify-center rounded-2xl">
          <span className="bg-white p-3 md:p-4 xl:p-7 rounded-xl text-brown_34">
            {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
          </span>
        </div>
        <p className="md:text-xl font-semibold mt-2 text-dark_brown">Days</p>
      </div>

      {/* Hours */}
      <div className="text-center">
        <div className="bg-[#CF5F1D] border-[3px] p-2 md:p-3 border-clock_border text-3xl md:text-4xl font-bold flex items-center justify-center rounded-2xl">
          <span className="bg-white p-3 md:p-4 xl:p-7 rounded-xl text-brown_34">
            {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
          </span>
        </div>
        <p className="md:text-xl font-semibold mt-2 text-dark_brown">Hours</p>
      </div>

      {/* Minutes */}
      <div className="text-center">
        <div className="bg-[#CF5F1D] border-[3px] p-2 md:p-3 border-clock_border text-3xl md:text-4xl font-bold  flex items-center justify-center rounded-2xl">
          <span className="bg-white p-3 md:p-4 xl:p-7 rounded-xl text-brown_34">
            {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}
          </span>
        </div>
        <p className="md:text-xl font-semibold mt-2 text-dark_brown">Minutes</p>
      </div>

      {/* Seconds */}
      <div className="text-center">
        <div className="bg-[#CF5F1D] border-[3px] p-2 md:p-3 border-clock_border text-3xl md:text-4xl font-bold flex items-center justify-center rounded-2xl">
          <span className="bg-white p-3 md:p-4 xl:p-7 rounded-xl text-brown_34">
            {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
          </span>
        </div>
        <p className="md:text-xl font-semibold mt-2 text-dark_brown">Seconds</p>
      </div>
    </div>
  );
};

export default Countdown;
