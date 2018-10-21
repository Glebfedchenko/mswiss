import React, {Component, Fragment} from 'react';
import Results from '../Results/Results';
import SearchFilter from './SearchFilter';
import TagFilters from './TagFilters';
import sdks from '../../redux/sdks.json';

const tags = sdks.results.map(r => r.tags.map(t => t));
const flattenedTags = [].concat(...tags);
const uniqueTags = [...new Set(flattenedTags)];
class Filters extends Component {
  state = {
    results: [],
    currentlyDisplayed: [],
    searchValue: '',
    filters: ['All', ...uniqueTags],
    selected: 'All',
  };

  componentDidMount() {
    this.setState({results: sdks.results, currentlyDisplayed: sdks.results});
  }

  onSearchInputChange = e => {
    const {results} = this.state;
    const newlyDisplayed = results.filter(r =>
      r.title.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    this.setState({
      searchValue: e.target.value,
      currentlyDisplayed: newlyDisplayed,
    });
  };

  onTagChange = tag => {
    const {results} = this.state;
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
export default Filters;
