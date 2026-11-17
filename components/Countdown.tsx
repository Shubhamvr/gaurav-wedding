
import React, { useState, useEffect } from 'react';

interface Props {
  targetDate: string;
}

const Countdown: React.FC<Props> = ({ targetDate }) => {
  const calculateTime = () => {
    const difference = new Date(targetDate).getTime() - Date.now();

    if (!Number.isFinite(difference) || difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime);

  useEffect(() => {
    // Calculate immediately
    setTimeLeft(calculateTime());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="text-center">
      <h4 className="font-luxury text-xl tracking-[0.5em] uppercase text-[#C5A46D] mb-12">
        Counting the Moments
      </h4>

      <div className="flex justify-center gap-10 md:gap-20">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Mins', value: timeLeft.minutes },
          { label: 'Secs', value: timeLeft.seconds }
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center group">
            <span className="font-luxury text-5xl md:text-6xl text-[#3A312A] group-hover:text-[#C5A46D] transition-colors duration-500">
              {String(item.value).padStart(2, '0')}
            </span>

            <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-[#3A312A]/40 mt-3 font-bold">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
