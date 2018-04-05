import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./components/App";
import Store  from "./store/Store";

const root = document.getElementById("root");

render(
    <Provider store = {Store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    root
);