import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import thunk from 'redux-thunk'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {compose, createStore, applyMiddleware} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {Provider} from "react-redux";



const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(
    app, document.getElementById('root')
);

reportWebVitals();
