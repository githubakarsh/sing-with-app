import { combineReducers } from 'redux';
import { loginReducer } from '../reducers/login.reducer';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const rootReducer = combineReducers({
    login : loginReducer,
})

const loggerMiddleware = createLogger()

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
)

export default store;
