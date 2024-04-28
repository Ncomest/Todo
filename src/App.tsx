import { useAppDispacth, useAppSelector } from "./hooks/redux";
import { userSlice } from "./store/reducers/UserSlice";

function App() {
 const  count  = useAppSelector(state => state.userReducer.count);
 const { increment } = userSlice.actions;
 const { decrement } = userSlice.actions;
 const dispatch = useAppDispacth();

 return (
  <div className="App">
   <h1>count:{count}</h1>
   <button onClick={() => dispatch(increment(5))}>Increment</button>
   <button onClick={() => dispatch(decrement(5))}>Decrement</button>
  </div>
 );
}

export default App;
