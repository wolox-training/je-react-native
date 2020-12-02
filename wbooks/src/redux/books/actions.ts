import { Dispatch } from 'redux';
import { createTypes, completeTypes } from 'redux-recompose';
import { BOOKS_MOCK } from '@constants/mockBooks';

export const actionNames = createTypes(completeTypes(['GET_BOOKS']), '@@BOOKS');

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
