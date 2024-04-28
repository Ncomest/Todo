import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import {
 increment,
 decrement,
 incrementByAmount,
} from "../../store/slices/counterSlice";
import { counterInterface } from "../../types/types";

import { useRef } from "react";

export default function Home(): React.ReactElement {
 const dispatch = useDispatch();
 const count = useSelector((state: counterInterface) => state.counter.value);

 const inputRef = useRef<HTMLInputElement>(null);

 const handleIncrementByAmount = () => {
  const value = parseInt(inputRef.current?.value || "0");
  dispatch(incrementByAmount(value)); // Передача значения в action creator
 };

 return (
  <div className="main-block">
   <button onClick={() => dispatch(increment())}>Increment</button>
   {count}
   <button onClick={() => dispatch(decrement())}>Decrement</button>
   {/* <button onClick={() => dispatch(reset())}>Reset</button> */}
   <input type="number" ref={inputRef} />
   <button onClick={handleIncrementByAmount}>Input</button>
  </div>
 );
}
