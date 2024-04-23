import { INCREMENT , DECREMENT  } from "./../actions/actionTypes/index";

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

  default:
   return state;
 }
};

export default countReducer;
