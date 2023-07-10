let initialState = {
  loading: true,
  error: undefined,
  data: undefined,
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
    case "FULFILLED":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
}
