import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReduser from './redux/root-reducer';
import Api from './api/api';


export default createStore(
    rootReduser,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(Api))
    )
);
