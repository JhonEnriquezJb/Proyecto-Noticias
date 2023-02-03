import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CnewsApp from "./CnewsApp";
import "./index.scss";
import { Provider } from "./provider/Provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider>
      <CnewsApp />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
