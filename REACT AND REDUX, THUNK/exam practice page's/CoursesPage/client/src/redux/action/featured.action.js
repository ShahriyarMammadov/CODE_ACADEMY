import axios from "axios";

export const featuredAction = (id) => {
  return async (dispatch) => {
    dispatch({
      type: "PENDING",
    });

    try {
      let response = await axios.get(`http://localhost:3000/products/${id}`);
      dispatch({
        type: "FULFILLED",
        payload: await response.data,
      });
    } catch (error) {
      dispatch({
        type: "REJECTED",
      });
    }
  };
};

export const cardAction = () => {
  return async (dispatch) => {
    dispatch({
      type: "PENDING",
    });

    try {
      let response = await axios.get(`http://localhost:3000/users`);
      dispatch({
        type: "FULFILLED_CARD",
        payload: await response.data,
      });
    } catch (error) {
      dispatch({
        type: "REJECTED",
      });
    }
  };
};
