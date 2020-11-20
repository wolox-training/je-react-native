import React from 'react';
import { FlatList } from 'react-native';
import { IBook } from '@interfaces/BookInfo';
import BookCard from '@components/BookCard';

import styles from './styles';

interface IProps {
  bookArray: IBook[];
}

function BookList(props: IProps) {
  const renderItem = ({ item }: { item: IBook }) => <BookCard book={item} />;
  return (
    <FlatList<IBook>
      style={styles.list}
      contentContainerStyle={styles.listContainer}
      data={props.bookArray}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
}

export default BookList;
