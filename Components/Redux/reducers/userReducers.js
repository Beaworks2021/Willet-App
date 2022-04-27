const initialState = {
  userData: [],
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

const userReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_ORIGIN":
      return { ...state, origin: payload };
    case "SET_DESTINATION":
      return { ...state, destination: payload };
    case "SET_TRAVELTIMEINFORMATION":
      return { ...state, travelTimeInformation: payload };
    default:
      return state;
  }
};

export default userReducers;
