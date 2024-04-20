import { useRef, useState } from "react";
import "./Label.scss";

interface Props {
 text: string;
}

// const handleInput=()=>{

// }

function Label({ text }: Props) {
 const [input, setInput] = useState("");

 const inputRef = useRef<HTMLInputElement>(null);

 const handleButtonClick = () => {
  if (inputRef.current) {
   setInput(inputRef.current.value);
  }
 };

 return (
  <label htmlFor="input-todo">
   {text}
   <input type="text" id="input-todo" ref={inputRef} />
   <button onClick={handleButtonClick}>Button</button>
   <p>Сохраненное значение: {input}</p>
  </label>
 );
}

export default Label;
