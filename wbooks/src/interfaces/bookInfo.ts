export interface IBook {
  id: number;
  author: string;
  title: string;
  genre: string;
  publisher: string;
  year: string;
  imageUrl: string | null;
}

export interface IBookAction {
  type: string;
  payload: IBook[] | string;
}
