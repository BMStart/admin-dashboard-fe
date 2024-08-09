import { api } from "@/store/api/apiConfig";
import { combineReducers } from "@reduxjs/toolkit";

import { uiReducer } from "@/store/actions/uiSlice";
import { userReducer } from "@/store/actions/userSlice";

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  ui: uiReducer,
  user: userReducer,
});
