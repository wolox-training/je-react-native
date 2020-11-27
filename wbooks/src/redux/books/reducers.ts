import { actionNames as bookActionNames } from '@redux/books/actions';
import { AppState } from '@interfaces/appInfo';
import { IBookAction, IBook } from '@interfaces/bookInfo';

const initialState: AppState = {
  bookList: [],
  loadingBooks: false,
  errorMessage: ''
};

const reducerBooks = (state = initialState, action: IBookAction): AppState => {
  switch (action.type) {
    case bookActionNames.GET_BOOKS: {
      return {
        ...state,
        loadingBooks: true
      };
    }
    case bookActionNames.GET_BOOKS_SUCCESS: {
      return {
        ...state,
        bookList: action.payload as IBook[],
        loadingBooks: false
      };
    }
    case bookActionNames.GET_BOOKS_FAILURE: {
      return {
        ...state,
        loadingBooks: false,
        errorMessage: action.payload as string
      };
    }
    default:
      return state;
  }
};

export default reducerBooks;
