import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import { Fragment } from 'react';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Bobby', text: 'Learning React-Router is fun!' },
];

const QuotesDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quotesId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <h1>Quote Detail</h1>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        {/*'/quotes/:quotesId/comments' this is also right*/}
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuotesDetail;
