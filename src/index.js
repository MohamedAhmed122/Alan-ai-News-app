import React from "react";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import ReactDom from "react-dom";

ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.querySelector("#root")
);
