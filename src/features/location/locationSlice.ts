import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface LocationState {
  ubication: {
    longitude: number | null;
    latitude: number | null;
  };
  isLoading: boolean;
}
interface SetLocation {
  ubication: {
    longitude: number;
    latitude: number;
  };
}

const initialState: LocationState = {
  ubication: {
    longitude: null,
    latitude: null,
  },
  isLoading: true,
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<SetLocation>) => {
      state.ubication = action.payload.ubication;
      state.isLoading = false;
    },
  },
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;
