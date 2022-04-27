import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInfornmation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setDestination, setOrigin, setTravelTimeInfornmation } =
  navSlice.actions;

//Selectors

export const selectOrigin = (state) => state.nav.rigin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInfornmation = (state) =>
  state.nav.travelTimeInfornmation;

export default navSlice.reducer;
