import { IBook } from '@interfaces/bookInfo';

export interface AppState {
  bookList: IBook[];
  bookListLoading: boolean;
  bookListError: string | null;
}
