import axios from 'axios';
import { useState } from "react";

const QUOTE_URL = 'https://inspo-quotes-api.herokuapp.com/quotes/random';



/** Simple presentation component for an inspirational quote.
 *
 * Props:
 * - text
 * - author
 *
 * QuoteGetter -> Quote
 **/
function Quote() {
  // const response = await quoteAPI();
  // console.log(response)
  // const text = (await quoteAPI()).text;
  // const author = (await quoteAPI()).author;
  const [quote, setQuote] = useState({
    text: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt"
  });

  async function quoteAPI() {
    const response = await axios.get(QUOTE_URL);
    const randomQuote = response.data.quote;
    setQuote(randomQuote);
  }

  return (
    <>
      <div>
        <p>{quote.text} - {quote.author}</p>
      </div>
      <button onClick={quoteAPI}>
        New Quote
      </button>
    </>
  );

};

export default Quote;