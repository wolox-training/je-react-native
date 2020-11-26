import { createStore } from 'redux';

import reducerBooks from './books/reducers';

const store = createStore(reducerBooks);

export default store;
