import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AdminType } from "../interfaces";

export interface AppState {
  admins: AdminType[];
  showSider: boolean;
}

const initialState: AppState = {
  admins: [],
  showSider: false,
};

export const appSlice = createSlice({
  name: "appStore",
  initialState,
  reducers: {
    setAdmins: (state, action: PayloadAction<AdminType[]>) => {
      state.admins = action.payload;
    },
    addAdmin: (state, action: PayloadAction<AdminType>) => {
      state.admins.push(action.payload);
    },
    editAdmin: (state, action: PayloadAction<AdminType>) => {
      state.admins.filter((admin) => admin.id !== action.payload.id);
      state.admins.push(action.payload);
    },
    setShowSider: (state) => {
      state.showSider = !state.showSider;
    },
  },
});

export const { setAdmins, addAdmin, setShowSider, editAdmin } =
  appSlice.actions;
export const admins = (state: AppState) => state.admins;
export const showSider = (state: AppState) => state.showSider;

export default appSlice.reducer;
