import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reactotron from '@config/reactotronConfig';
import { fetchMiddleware } from 'redux-recompose';

import reducerBooks from './books/reducers';

const enhancers = [applyMiddleware(thunk, fetchMiddleware)];
if (__DEV__) {
  enhancers.push(Reactotron.createEnhancer());
}
const store = createStore(reducerBooks, compose(...enhancers));

export default store;
