import React from 'react';
import PropTypes from 'prop-types';

const SearchFilter = ({type, value, onChange, tag}) => (
  <div className="filters__search">
    <h1>SearchFilter</h1>
    <input type={type} value={value} onChange={onChange} />
    {tag}
  </div>
);
SearchFilter.defaultProps = {
  tag: undefined,
  value: undefined,
  onChange: PropTypes.func,
};

SearchFilter.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  tag: PropTypes.string,
};
export default SearchFilter;
