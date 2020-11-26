import { BOOKS_MOCK } from '@constants/mockBooks';

const reducerBooks = (state = [], action: any) => {
  switch (action.type) {
    case 'GET_BOOK_LIST': {
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
