import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UiState {
  isScrolling: boolean;
}

const initialState: UiState = {
  isScrolling: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setScrollYContainer: (state, action: PayloadAction<boolean>) => {
      state.isScrolling = action.payload;
    },
  },
});

export const uiReducer = uiSlice.reducer;
export const uiActions = uiSlice.actions;
