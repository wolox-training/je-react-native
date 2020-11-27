import { Dispatch } from 'redux';
import { BOOKS_MOCK } from '@constants/mockBooks';

export const actionNames = {
  GET_BOOKS: '@@BOOKS/GET_BOOKS',
  GET_BOOKS_SUCCESS: '@@BOOKS/GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: '@@BOOKS/GET_BOOKS_FAILURE'
};

export const actionCreators = {
  getBooks: () => (dispatch: Dispatch) => {
    dispatch({ type: actionNames.GET_BOOKS });
    const response = { ok: true, data: BOOKS_MOCK };
    if (response.ok) {
      dispatch({ type: actionNames.GET_BOOKS_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: actionNames.GET_BOOKS_FAILURE, payload: response.data });
    }
  }
};
