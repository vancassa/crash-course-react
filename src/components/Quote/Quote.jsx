import { useEffect, useState } from "react";
import "./Quote.css";

const API_URL = "https://favqs.com/api/qotd";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This function will called whenever "quote" changes
    if (quote) {
      /**
       * When updating a state, if the new state depends on the previous state, it's better to pass a function.
       * In this case, the new count state = previous value + 1.
       * Instead of using `setCount(count + 1)`, it's better to pass a function.
       * In the function below, `c` is the previous value of `count`.
       * `c+1` is the new value of that we want to pass.
       */
      setCount((c) => c + 1);
    }
  }, [quote]);

  const getNewQuote = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setAuthor(data.quote.author);
        setQuote(data.quote.body);
      });
  };

  return (
    <div className="quote-generator">
      {quote ? (
        <div>
          <p className="quote-generator__text">{quote}</p>
          {author && <span className="quote-generator__author">- {author}</span>}
        </div>
      ) : (
        <p>Click the button to get a quote</p>
      )}

      <button className="quote-generator__button" type="button" onClick={getNewQuote}>
        Get new quote
      </button>
      <p>I have called this API {count} times.</p>
    </div>
  );
};

export default Quote;
