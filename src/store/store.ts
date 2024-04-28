import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./reducers/CounterSlice";

// const rootReducer = combineReducers({
//  userReducer,
// });

// export const setupStore = () => {
//  return configureStore({
//   reducer: rootReducer,
//  });
// };

const store = configureStore({
 reducer: {
  counter: CounterSlice,
 },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof rootReducer>;
// export type AppStore = ReturnType<typeof setupStore>;
