import {
    createStore
} from 'redux';
import {
    composeWithDevTools
} from 'redux-devtools-extension';

import reducers from './reducers';

const defaultState = [{
        id: 'id-1',
        text: 'fix file',
        priority: '+2',
        category: 'Do now',
        date: '2018-06-21',
    },
    {
        id: 'id-2',
        text: 'add comments',
        priority: '+1',
        category: 'Do now',
        date: '2018-06-12',
    },
    {
        id: 'id-3',
        text: 'pull request',
        priority: '+2',
        category: 'Do now',
        date: '2018-05-25',
    },

];

const store = createStore(reducers, defaultState, composeWithDevTools());

export default store;