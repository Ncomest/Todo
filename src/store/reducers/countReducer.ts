import { INCREMENT , DECREMENT, RESET, ADD_COUNT  } from "./../actions/actionTypes/index";

const initialState = {
 count: 0,
};

const countReducer = (state = initialState, action: any) => {
 switch (action.type) {
  case INCREMENT:
   return {
    ...state,
    count: state.count + 1,
   };

  case DECREMENT:
   return {
    ...state,
    count: state.count - 1,
   };

  case RESET:
   return {
    ...state,
    count: 0,
   };

  case ADD_COUNT:
   return {
    ...state,
    count: state.count + action.payload,
   };

  default:
   return state;
 }
};

export default countReducer;
