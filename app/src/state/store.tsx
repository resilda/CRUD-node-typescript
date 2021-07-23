import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';
import thunk from 'redux-thunk';

export function createThunkMiddleware() {
    return ({ dispatch, getState }) => (next) => (action) => {
        if (typeof action === 'function') {
            return action(dispatch, next, getState)
        }
        return next(action)
    }
}

const thunkMiddleware = createThunkMiddleware();

const store: Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(thunkMiddleware))));

export default store;
