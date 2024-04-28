import { useAppDispacth, useAppSelector } from "./hooks/redux";
import {counterSlice} from "./store/reducers/CounterSlice";

function App() {
 const dispatch = useAppDispacth();
 const count = useAppSelector((state) => state.counter.count);
 const { increment } = counterSlice.actions;


 return (
  <div className="App">
   <h1>{count}</h1>
   <button onClick={() => dispatch(increment(5))}>INC</button>
  </div>
 );
}

export default App;
