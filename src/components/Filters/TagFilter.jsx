import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({name, selected, filter, onTagChange}) => (
  <div>
    {/* eslint-disable-next-line */}
    <a href="#" className={filter === selected ? 'red' : 'black'} onClick={onTagChange.bind(null,filter)}>
      <p>{name}</p>
    </a>
  </div>
);

Filter.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  onTagChange: PropTypes.func.isRequired,
};

export default Filter;
