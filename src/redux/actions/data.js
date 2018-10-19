import axios from 'axios';

const BASE_URL = `https://www.mocky.io/v2/5bc71805320000642c0b0646`; // submitted json to mock server
export const GET_DATA = `GET_DATA`;
export const SEARCH = `SEARCH`;
export const SEARCH_BY_TAG = `SEARCH_BY_TAG`;

export const getData = () => {
  const request = axios.get(BASE_URL).then(res => res.data);
  return {
    type: GET_DATA,
    payload: request,
  };
};

// search action in case project is run with redux
export const searchData = value => ({
  type: SEARCH,
  payload: value,
});

// search by tag action in case project is run with redux
export const searchByTag = value => ({
  type: SEARCH_BY_TAG,
  payload: value,
});
