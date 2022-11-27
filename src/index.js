import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from 'react-router-dom'
import { createStore,applyMiddleware,compose,combineReducers } from 'redux';
import { Provider } from 'react-redux';
import PizzaReducer from './Store/reducer/Pizza';
import OrdersReducer from './Store/reducer/Order'
import authReducer from './Store/reducer/auth'
import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById('root'));

const reducer=combineReducers({
    pizza:PizzaReducer,
    order:OrdersReducer,
    auth:authReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(reducer,composeEnhancers(applyMiddleware(thunk)))

root.render(
<Provider store={store}>
<HashRouter>
    <App />
</HashRouter>
</Provider>
);

reportWebVitals();
