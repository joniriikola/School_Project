import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import ordersReducer from './reducers/ordersReducer';
import sandwichesReducer from './reducers/sandwichesReducer';
import toppingsReducer from './reducers/toppingsReducer';


export const reducers = combineReducers({
	orders: ordersReducer,
	sandwiches: sandwichesReducer,
	toppings: toppingsReducer
});

export default createStore(
	reducers,
	composeWithDevTools(applyMiddleware(thunk))
);
