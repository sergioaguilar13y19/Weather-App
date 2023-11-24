import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  users: any[];
  name: string | null;
  token: string | null;
}

const initialState: AuthState = {
  users: [],
  name: null,
  token: null,
};

interface SetToken {
  token: string;
  name: string;
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<any>) => {
      state.users = action.payload;
    },
    setToken: (state, action: PayloadAction<SetToken>) => {
      state.token = action.payload.token;
      state.name = action.payload.name;
    },
    singOut: (state) => {
      state.name = null;
      state.token = null;
    },
  },
});

export const { setUsers, setToken, singOut } = authSlice.actions;
export default authSlice.reducer;
