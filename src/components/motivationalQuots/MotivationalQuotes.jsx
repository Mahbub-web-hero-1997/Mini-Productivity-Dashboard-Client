import React, { useEffect, useState } from "react";
import axios from "axios";

const MotivationalQuotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getQuote = async () => {
    try {
      const res = await axios.get(
        "https://api.allorigins.win/get?url=" +
          encodeURIComponent("https://zenquotes.io/api/random")
      );
      const quoteData = JSON.parse(res.data.contents);
      setQuote(quoteData[0].q);
      setAuthor(quoteData[0].a);
    } catch (err) {
      setQuote("Failed to load quote.");
      setAuthor("");
      console.error(err);
    }
  };

  useEffect(() => {
    getQuote();
    const intervalId = setInterval(getQuote, 60000); // update every 60s
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div
        className="rounded-2xl shadow-2xl  animate-fade-in"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="p-6 bg-white/10 rounded-2xl">
          <marquee
            behavior="scroll"
            direction="left"
            scrollamount="5"
            className="text-lg italic font-semibold tracking-wide"
          >
            “{quote}”
          </marquee>
          {author && (
            <p className="mt-4 text-right font-medium ">
              — {author}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MotivationalQuotes;
