export default function favoriteReducer(state = [], action) {
  switch (action.type) {
    case "FAV":
      return [...state, { state: action.payload }];

    case "REMOVE":
      return [
        console.log(
          // ...state?.filter((element) => element.name !== action.payload.name)
        ),
      ];
    default:
      return state;
  }
}
