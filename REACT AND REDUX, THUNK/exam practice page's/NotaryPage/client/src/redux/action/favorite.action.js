export const favAction = (data) => {
  return {
    type: "FAV",
    payload: data,
  };
};
export const removeFavAction = (data) => {
  return {
    type: "REMOVE",
    payload: data,
  };
};
