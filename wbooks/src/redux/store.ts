import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducerBooks from './books/reducers';

const store = createStore(reducerBooks, applyMiddleware(thunk));

export default store;
