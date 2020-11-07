import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReduser from './reducer/reducer';
import {changeUserStatus} from './reducer/user/user-actions';
import {UserStatus} from '../constants/const';
import Api from '../services/api';


const onUnauthorized = () => store.dispatch(changeUserStatus(UserStatus.NO_AUTH));

const api = new Api({
  onFailCallback: onUnauthorized,
});

const store = createStore(
    rootReduser,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);


export default store;
