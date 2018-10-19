import React from 'react';
import PropTypes from 'prop-types';
import TagFilter from './TagFilter';

const TagFilters = ({filters, selected, onTagChange}) => (
  <div className="filters__tag">
    <h1>Tag Filters</h1>
    {filters.map(f => (
      <TagFilter
        key={f}
        name={f}
        selected={selected}
        filter={f}
        onTagChange={onTagChange}
      />
    ))}
  </div>
);

TagFilters.defaultProps = {
  filters: PropTypes.array,
};

TagFilters.propTypes = {
  onTagChange: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(String),
  selected: PropTypes.string.isRequired,
};

export default TagFilters;
