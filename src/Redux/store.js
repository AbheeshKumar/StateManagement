import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./slices/countslice";

export default configureStore({
  reducer: {
    count: countReducer,
  },
});
