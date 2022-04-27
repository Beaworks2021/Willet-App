export const setOrigin = (state) => {
  return {
    type: "SET_ORIGIN",
    payload: state,
  };
};

export const setDestination = (state) => {
  return {
    type: "SET_DESTINATION",
    payload: state,
  };
};

export const setTravelTimeInformation = (state) => {
  console.log("OK Now =========", state);
  return {
    type: "SET_TRAVELTIMEINFORMATION",
    payload: state,
  };
};
