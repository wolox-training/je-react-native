import { IBook, IBookAction } from '@interfaces/bookInfo';
import { BOOKS_MOCK } from '@constants/mockBooks';

export const actionNames = {
  GET_BOOK_LIST: 'GET_BOOK_LIST'
};

export const actionCreators = {
  getBookList: (): IBookAction => {
    // fetch the book list and return the action object with the payload
    const payload: IBook[] = BOOKS_MOCK;
    return {
      type: actionNames.GET_BOOK_LIST,
      payload
    };
  }
};
