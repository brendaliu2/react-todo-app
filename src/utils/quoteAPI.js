import React, { useState } from "react";
import axios from 'axios';
import Quote from './Quote';

const QUOTE_URL = 'https://inspo-quotes-api.herokuapp.com/quotes/random';

async function QuoteGetter() {
  
  const [quote, setQuote] = useState('');
  
  
  const response = await axios.get(QUOTE_URL);

  const { text, author } = response.data.quote;

  return (
    <div>
      <Quote text={text} author={author} />
    </div>
  );
}