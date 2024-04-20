import { ReactElement } from "react";
import "./TodoList.scss";

function TodoList(): ReactElement {
 return (
  <li>
   <input type="checkbox" />
   <p>text</p>
  </li>
 );
}

export default TodoList;
