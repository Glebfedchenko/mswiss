import React from 'react';
import PropTypes from 'prop-types';

const Result = ({result}) => {
  const {title, tags} = result;
  return (
    <div className="results__result">
      <h1>{title}</h1>
      {tags.map(t => (
        <div className="tag" key={t}>
          {t}
        </div>
      ))}
    </div>
  );
};

Result.propTypes = {
  result: PropTypes.shape({title: PropTypes.string, tags: PropTypes.array})
    .isRequired,
};

export default Result;
