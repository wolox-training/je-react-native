import { BOOKS_MOCK } from '@constants/mockBooks';
import { actionNames as bookActionNames } from '@redux/books/actions';
import { AppState } from '@interfaces/AppInfo';
import { IBookAction } from '@interfaces/BookInfo';

const initialState: AppState = {
  bookList: [],
  idSelectedBook: null
};

const reducerBooks = (state = initialState, action: IBookAction): AppState => {
  switch (action.type) {
    case bookActionNames.getBookList: {
      return {
        ...state,
        bookList: BOOKS_MOCK
      };
    }
    default:
      return state;
  }
};

export { reducerBooks };
