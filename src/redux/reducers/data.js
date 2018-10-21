import * as actions from '../actions/data';
import sdks from '../sdks.json';

const tags = sdks.results.map(r => r.tags.map(t => t));
const flattenedTags = [].concat(...tags);
const uniqueTags = [...new Set(flattenedTags)];

export const data = (
  state = {
    searchValue: '',
    results: sdks.results,
    displayResults: [],
    uniqueTags,
  },
  action,
) => {
  switch (action.type) {
    case actions.GET_DATA: // action for getting the data in case project is run with redux
      return {
        ...state,
        results: action.payload,
        displayResults: action.payload.results,
      };
    case actions.SEARCH: // action for search in case project is run with redux
      return {
        ...state,
        searchValue: action.payload,
        results: state.displayResults.filter(r =>
          r.title.toLowerCase().includes(action.payload.toLowerCase()),
        ),
      };
    case action.SEARCH_BY_TAG: // action for search by tag in case project is run with redux
      return {
        ...state,
        searchValue: action.payload,
        displayResults: state.displayResults.filter(r =>
          r.tags.toLowerCase().includes(action.payload.toLowerCase()),
        ),
      };
    default:
      return state;
  }
};
