let initialState = {
  loading: true,
  error: undefined,
  cardData: undefined,
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case "PENDING":
      return {
        loading: true,
      };
    case "REJECTED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "FULFILLED_CARD":
      return {
        ...state,
        loading: false,
        cardData: action.payload,
      };
    default:
      return state;
  }
}
