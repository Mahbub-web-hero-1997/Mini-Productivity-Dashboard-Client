import React, { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const ComingSoon = () => {
  const calculateTimeLeft = () => {
    const launchDate = new Date("2025-07-01T00:00:00");
    const now = new Date();
    const difference = launchDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white text-center bg-gradient-to-br from-[#ff6767] via-[#ff8c8c] to-[#ffb6b6] p-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-bounce">
        Coming Soon
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-xl">
        We're working hard to launch something amazing. Stay tuned!
      </p>

      <div className="flex gap-6 text-2xl font-bold">
        {["days", "hours", "minutes", "seconds"].map((unit) => (
          <div key={unit} className="flex flex-col items-center">
            <span className="bg-white text-[#ff6767] rounded-xl px-4 py-2 shadow-lg">
              {timeLeft[unit] ?? "0"}
            </span>
            <span className="capitalize mt-1">{unit}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-6 mt-10 text-white text-xl">
        <a href="#" className="hover:text-gray-200 transition">
          <FaFacebookF />
        </a>
        <a href="#" className="hover:text-gray-200 transition">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-gray-200 transition">
          <FaInstagram />
        </a>
      </div>

      <p className="mt-6 text-sm opacity-70">
        © 2025 The Task-Manager. All rights reserved.
      </p>
    </div>
  );
};

export default ComingSoon;
