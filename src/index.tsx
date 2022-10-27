import {App} from './app';
import {Provider} from "react-redux";
import store from "./store/index";
import {createRoot} from "react-dom/client";
import React from 'react';
import './styles/styles.css';



createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <App />
    </Provider>
);

