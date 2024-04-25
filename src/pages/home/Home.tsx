import "./Home.scss";
import { RootState } from "../../store/reducers";
import { useDispatch, useSelector } from "react-redux";
import {
 increment,
 decrement,
 reset,
 addCount,
} from "../../store/actions/actionCreators";
import { useRef} from "react";

export default function Home(): React.ReactElement {
 const dispatch = useDispatch();
 const count = useSelector((state: RootState) => state.count.count);

 const inputRef = useRef<HTMLInputElement>(null);

 const handleAddCount = () => {
  const value = parseInt(inputRef.current?.value || "0", 10); // Преобразование строки в число с обработкой случая, когда значение undefined
  dispatch(addCount(value));
 };


 return (
  <div className="main-block">
   <button onClick={() => dispatch(increment())}>Increment</button>
   {count}
   <button onClick={() => dispatch(decrement())}>Decrement</button>
   <button onClick={() => dispatch(reset())}>Reset</button>
   <input type='number' ref={inputRef} />
   <button onClick={handleAddCount}>Input</button>
  </div>
 );
}
