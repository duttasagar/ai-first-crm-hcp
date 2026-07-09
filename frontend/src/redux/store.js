import { configureStore } from "@reduxjs/toolkit";

import interactionReducer from "./interactionSlice";
import chatReducer from "./chatSlice";

export default configureStore({
  reducer: {
    interaction: interactionReducer,
    chat: chatReducer,
  },
});