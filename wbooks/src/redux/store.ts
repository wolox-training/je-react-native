import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reactotron from '@config/reactotronConfig';

import reducerBooks from './books/reducers';

const store = createStore(reducerBooks, compose(applyMiddleware(thunk), Reactotron.createEnhancer()));

export default store;
