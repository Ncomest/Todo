import "./Home.module.scss";

import { useRef } from "react";

export default function Home(): React.ReactElement {
 return (
  <>
   <div className="main-block"></div>
   <div className="todo-block">
    <input type="text" />
    <button></button>
    <div>
     <input type="checkbox" />
     <p>Some text</p>
    </div>
   </div>
  </>
 );
}
