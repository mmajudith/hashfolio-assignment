import { createStore, applyMiddleware, compose} from 'redux';
import rootReducers from './reducers/index'

export default function configureStore(initialState){

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //add support for redux dev tools

    return createStore( 
        rootReducers, 
        initialState,
        composeEnhancers(applyMiddleware()));
}