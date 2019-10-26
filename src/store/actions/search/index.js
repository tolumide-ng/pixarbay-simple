import axios from "axios";
import actionTypes from "../../actionTypes/search/index";
import dotenv from "dotenv";

dotenv.config();

const { SEARCH_FAILURE, SEARCH_PENDING, SEARCH_SUCCESS } = actionTypes;

export const searchPending = () => ({
  type: SEARCH_PENDING,
  payload: {
    searchStatus: "pending",
    searchError: null,
    searchResult: [],
  },
});

export const searchFailure = searchError => ({
  type: SEARCH_FAILURE,
  payload: {
    searchStatus: "failure",
    searchError,
    searchResult: [],
  },
});

export const searchSuccess = searchResult => ({
  type: SEARCH_SUCCESS,
  payload: {
    searchStatus: "success",
    searchError: null,
    searchResult,
  },
});

export const searchAction = ({
  searchQuery,
  amount = 20,
}) => async dispatch => {
  dispatch(searchPending());

  const value = searchQuery === undefined ? "computers" : searchQuery;

  try {
    const response = await axios({
      url: `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${value}&image_type=photo?per_page=${amount}`,
      method: "get",
    });
    const responseHits = response.data.hits;
    dispatch(searchSuccess(responseHits));
  } catch (error) {
    dispatch(searchFailure(error));
  }
};
