import { userRoles } from '@/utils/constants';
import { getCookieValue } from '@/utils/utils';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isAuthorize: boolean;
  user: any | null;
  role: any;
}

const initialState: AuthState = {
  user: null,
  isAuthorize: true,
  role: userRoles.ADMIN,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<any>) => {
      const token = getCookieValue('_auth_token_');
      if (token) {
        state.isAuthorize = true;
      } else {
        state.isAuthorize = false;
      }
      state.user = action.payload;
    },
    setIsAuthorized: (state, action: PayloadAction<boolean>) => {
      state.isAuthorize = action.payload;
    },
    setCompany: (state, action: PayloadAction<any>) => {
      state.user!.company = action.payload;
    },
    logoutStore: (state) => {
      state.role = userRoles.PUBLIC;
      state.isAuthorize = false;
      state.user = null;
    },
    setRole: (state, action: PayloadAction<any>) => {
      state.role = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
