import { createTypes, completeTypes } from 'redux-recompose';
import BookService from '@services/BookService';

export const actionNames = createTypes(completeTypes(['GET_BOOKS']), '@@BOOKS');

export const actionCreators = {
  getBooks: () => ({
    type: actionNames.GET_BOOKS,
    target: 'bookList',
    service: BookService.getBooksList
  })
};
