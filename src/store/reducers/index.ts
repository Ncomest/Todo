import { combineReducers } from "redux";
import countReducer from "./countReducer";

const rootReducer = combineReducers({
 count: countReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;