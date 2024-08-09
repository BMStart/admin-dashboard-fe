import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { uiActions } from "@/store/actions/uiSlice";
import { userActions } from "@/store/actions/userSlice";

const allActions = {
  ...uiActions,
  ...userActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};
