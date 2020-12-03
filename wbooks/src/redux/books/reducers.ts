import { completeState, completeReducer, createReducer } from 'redux-recompose';
import { actionNames as bookActionNames } from '@redux/books/actions';
import { AppState } from '@interfaces/appInfo';

const initialStateDescription = {
  bookList: []
};

const initialState: AppState = completeState(initialStateDescription);

const reducerDescription = {
  primaryActions: [bookActionNames.GET_BOOKS]
};

export default createReducer(initialState, completeReducer(reducerDescription));
