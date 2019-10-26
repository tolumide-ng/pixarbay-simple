import actionTypes from "../../actionTypes/search";

const { SEARCH_FAILURE, SEARCH_PENDING, SEARCH_SUCCESS } = actionTypes;

const initialState = {
  searchStatus: "rest",
  searchError: null,
  searchResult: [],
};

const searchTypes = [SEARCH_FAILURE, SEARCH_PENDING, SEARCH_SUCCESS];

const searchReducer = (state = initialState, { type, payload }) => {
  return searchTypes.includes(type) ? { ...state, ...payload } : state;
};

export default searchReducer;
