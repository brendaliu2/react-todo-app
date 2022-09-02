/** Simple presentation component for an inspirational quote.
 *
 * Props:
 * - text
 * - author
 *
 * QuoteGetter -> Quote
 **/
async function Quote({ text, author }) {

  return (
    <div>
      <p><i>{text}</i></p>
      <p>-by {author}</p>
    </div>
  );
};

export default Quote;