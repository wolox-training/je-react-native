const actionNames = {
  getBookList: 'GET_BOOK_LIST',
  getBookById: 'GET_BOOK_BY_ID'
};

export const actionCreators = {
  getBookList: () => ({
    type: actionNames.getBookList
  }),
  getBookById: (id: string) => ({
    type: actionNames.getBookById,
    id
  })
};
