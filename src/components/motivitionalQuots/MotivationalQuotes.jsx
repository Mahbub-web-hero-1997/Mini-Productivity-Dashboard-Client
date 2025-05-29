import React, { useEffect, useState } from "react";
import axios from "axios";

const MotivationalQuotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
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

    getQuote();
  }, []);

  return (
    <div className="p-4 text-center">
      <p className="text-lg italic">"{quote}"</p>
      {author && <p className="text-sm mt-2">— {author}</p>}
    </div>
  );
};

export default MotivationalQuotes;
