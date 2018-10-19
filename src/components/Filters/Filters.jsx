import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import Results from '../Results/Results';
import SearchFilter from './SearchFilter';
import TagFilters from './TagFilters';

class Filters extends Component {
  state = {
    // eslint-disable-next-line
    currentlyDisplayed: this.props.results,
    searchValue: '', // eslint-disable-next-line
    filters: [ 'All', ...this.props.uniqueTags],
    selected: 'All',
  };

  onSearchInputChange = e => {
    const {results} = this.props;
    const newlyDisplayed = results.filter(r =>
      r.title.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    this.setState({
      searchValue: e.target.value,
      currentlyDisplayed: newlyDisplayed,
    });
  };

  onTagChange = tag => {
    const {results} = this.props;
    this.setState({
      selected: tag,
      currentlyDisplayed:
        tag === 'All'
          ? results.filter(r => r.title)
          : results.filter(r => r.tags.includes(tag)),
    });
  };

  render() {
    const {searchValue, currentlyDisplayed, filters, selected} = this.state;
    return (
      <Fragment>
        <div className="filters">
          <SearchFilter
            type="text"
            value={searchValue}
            onChange={this.onSearchInputChange}
          />
          <TagFilters
            filters={filters}
            selected={selected}
            onTagChange={this.onTagChange}
          />
        </div>
        <Results results={currentlyDisplayed} />
      </Fragment>
    );
  }
}

export default connect(state => ({
  results: state.data.results,
  uniqueTags: state.data.uniqueTags,
}))(Filters);
