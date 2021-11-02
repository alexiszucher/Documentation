import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import * as reducers from './reducers';

export const initStore = (initialState) => {
    const middlewares = [thunkMiddleware];
    if (process.env.REACT_APP_LOG_REDUX) {
        middlewares.push(createLogger({ collapsed: true, level: 'warn' }));
    }

    let reduxMiddleware = applyMiddleware(...middlewares);
    if (process.env.NODE_ENV !== 'production') {
        reduxMiddleware = composeWithDevTools(reduxMiddleware);
    }

    return createStore(combineReducers(reducers), initialState, reduxMiddleware);
}