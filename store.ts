import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { loadState, saveState } from "./localstorage";

const preloadedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: preloadedState,
});

// store.subscribe(() => {
//   saveState(store.getState());
// });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
