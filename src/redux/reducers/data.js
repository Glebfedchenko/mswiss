import * as actions from '../actions/data';
import sdks from '../sdks.json';

const tags = sdks.results.map(r => r.tags.map(t => t)).flat();
const uniqueTags = [...new Set(tags)];

export const data = (
  state = {
    searchValue: '',
    results: sdks.results,
    displayResults: [], // in case project is run with redux
    uniqueTags,
  },
  action,
) => {
  switch (action.type) {
    case actions.GET_DATA: // implemented state change in case of request with axios
      return {
        ...state,
        results: action.payload,
        displayResults: action.payload.results, // in case project is run with redux
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
