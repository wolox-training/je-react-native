import api from '@config/api';
import { BOOKS_MOCK } from '@constants/mockBooks';

function getBooksFromMock() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ ok: true, data: BOOKS_MOCK }), 1000);
  });
}

export default {
  getBooksList: getBooksFromMock,
  getBookDetail: (id: number) => api.get('/books', { id })
};
