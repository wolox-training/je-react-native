import { IBookAction } from '@interfaces/BookInfo';

export const actionNames = {
  getBookList: 'GET_BOOK_LIST',
  getBookById: 'GET_BOOK_BY_ID'
};

export const actionCreators = {
  getBookList: (): IBookAction => ({
    type: actionNames.getBookList
  }),
  getBookById: (id: number): IBookAction => ({
    type: actionNames.getBookById,
    id
  })
};
