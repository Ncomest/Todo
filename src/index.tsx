import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";

const store = setupStore();

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
    <App />
   </Provider>
  </React.StrictMode>,
  document.getElementById("root")
 );
