import { Fragment } from 'react';
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Bobby', text: 'Learning React-Router is fun!' },
];

const AllQuotes = () => {
  return (
    <Fragment>
      <h1>All Quotes</h1>
      <QuoteList quotes={DUMMY_QUOTES} />
    </Fragment>
  );
};

export default AllQuotes;
