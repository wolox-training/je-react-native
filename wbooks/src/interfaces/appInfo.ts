import { IBook } from '@interfaces/bookInfo';

export interface AppState {
  bookList: IBook[];
  loadingBooks: boolean;
  errorMessage: string;
}
