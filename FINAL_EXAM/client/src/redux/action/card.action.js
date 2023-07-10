import axios from "axios";

export const cardAction = () => {
  return async (dispatch) => {
    dispatch({
      type: "PENDING",
    });

    try {
      let response = await axios.get("http://localhost:3000/product");
      dispatch({
        type: "FULFILLED",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "REJECTED",
        payload: error,
      });
    }
  };
};
export const favAction = (obj) => {
  return async (dispatch) => {
    dispatch({
      type: "FAVORITE",
      payload: obj,
    });
  };
};
export const delFavAction = (obj) => {
  return async (dispatch) => {
    dispatch({
      type: "DEL_FAVORITE",
      payload: obj,
    });
  };
};
export const searchAndSortAction = (obj) => {
  return async (dispatch) => {
    dispatch({
      type: "SEARCHANDSORT",
      payload: obj,
    });
  };
};
