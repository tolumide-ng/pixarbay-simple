import axios from "axios";
import actionTypes from "../../actions/single";

const { SINGLE_FAILURE, SINGLE_PENDING, SINGLE_SUCCESS } = actionTypes;

export const singlePending = () => ({
  type: SINGLE_PENDING,
  payload: {
    singleStatus: "pending",
    singleError: null,
    singleResultt: [],
  },
});

export const singleFailure = singleError => ({
  type: SINGLE_FAILURE,
  payload: {
    singleStatus: "failure",
    singleError,
    singleResult: [],
  },
});

export const singleSuccess = singleResult => ({
  type: SINGLE_SUCCESS,
  payload: {
    singleStatus: "failure",
    singleError: null,
    singleResult,
  },
});

export const searchAction = ({ searchId }) => async dispatch => {
  dispatch(singlePending());
  try {
    const response = await axios({
      url: ``,
      method: "get",
    });

    dispatch(singleSuccess(response.data));
  } catch (error) {
    dispatch(singleFailure(error));
  }
};
