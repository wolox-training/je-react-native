import { actionNames as bookActionNames } from '@redux/books/actions';
import { AppState } from '@interfaces/appInfo';
import { IBookAction } from '@interfaces/bookInfo';

const initialState: AppState = {
  bookList: []
};

const reducerBooks = (state = initialState, action: IBookAction): AppState => {
  switch (action.type) {
    case bookActionNames.GET_BOOK_LIST: {
      return {
        ...state,
        bookList: action.payload
      };
    }
    default:
      return state;
  }
};

export default reducerBooks;
