import React from 'react';
import PropTypes from 'prop-types';
import Result from './Result';

const Results = ({results}) => (
  <div className="results">
    {results.map(result => (
      <Result result={result} key={result.id} />
    ))}
  </div>
);
Results.defaultProps = {results: undefined};
Results.propTypes = {results: PropTypes.arrayOf(Object)};

export default Results;
