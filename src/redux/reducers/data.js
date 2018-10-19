import * as actions from '../actions/data';
import sdks from '../sdks.json';

const tags = sdks.results.map(r => r.tags.map(t => t)).flat();
const uniqueTags = [...new Set(tags)];

export const data = (
  state = {
    searchValue: '',
    results: sdks.results,
    uniqueTags,
  },
  action,
) => {
  switch (action.type) {
    case actions.GET_DATA: // implemented state change in case of request with axios
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};
