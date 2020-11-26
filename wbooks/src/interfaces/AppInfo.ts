import { IBook } from '@interfaces/BookInfo';

export interface AppState {
  bookList: IBook[];
  idSelectedBook: number | null;
}
