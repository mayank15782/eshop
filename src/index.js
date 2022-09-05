import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./util/reducer";
import { HashRouter } from "react-router-dom";

const store = createStore(reducer);

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);
