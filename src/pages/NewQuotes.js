import { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuotes = () => {
  const history = useHistory();
  const addQuoteHandler = quoteData => {
    console.log(quoteData);

    history.push('./quotes');
  };

  return (
    <Fragment>
      <h1>New Quotes</h1>;
      <QuoteForm onAddQuote={addQuoteHandler} />
    </Fragment>
  );
};

export default NewQuotes;
