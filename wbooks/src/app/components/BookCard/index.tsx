import React from 'react';
import { Image, View, Text } from 'react-native';
import { IBook } from '@interfaces/BookInfo';
import BOOK_PLACEHOLDER from '@assets/General/img_book_placeholder_desc.png';

import styles from './styles';

interface IProps {
  book: IBook;
}

function BookCard({ book }: IProps) {
  return (
    <View style={styles.container}>
      <Image source={book.imageUrl ? { uri: book.imageUrl } : BOOK_PLACEHOLDER} style={styles.bookCover} />
      <View style={styles.summaryContainer}>
        <Text style={styles.bookTitle}>{book.title}</Text>
        <Text style={styles.authorName}>{book.author}</Text>
      </View>
    </View>
  );
}

export default BookCard;
