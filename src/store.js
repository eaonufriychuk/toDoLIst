import {
    createStore
} from 'redux';
import {
    composeWithDevTools
} from 'redux-devtools-extension';

import reducers from './reducers';

const defaultState = [{
    id: 'id',
    text: 'task',
    priority: '+2',
    category: 'today',
    date: '23.06.18',
}];
const store = createStore(reducers, defaultState, composeWithDevTools());

export default store;