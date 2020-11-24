import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { IBook } from '@interfaces/BookInfo';
import BookCard from '@components/BookCard';

import styles from './styles';

interface IProps {
  bookArray: IBook[];
}

function BookList({ bookArray }: IProps) {
  const renderItem: ListRenderItem<IBook> = ({ item }) => <BookCard book={item} />;
  return (
    <FlatList<IBook>
      style={styles.list}
      contentContainerStyle={styles.listContainer}
      data={bookArray}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
}

export default BookList;
