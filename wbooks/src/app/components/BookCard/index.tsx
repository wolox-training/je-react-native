import React from 'react';
import { Image, View, Text } from 'react-native';
import { IBook } from '@interfaces/BookInfo';

import styles from './styles';

interface IProps {
  book: IBook;
}

function BookCard({ book }: IProps) {
  return (
    <View style={styles.container}>
      <Image
        source={
          book.imageUrl
            ? { uri: book.imageUrl }
            : {
                uri:
                  'http://wolox-training.s3.amazonaws.com/uploads/el-psicoanalista-analyst-john-katzenbach-paperback-cover-art.jpg'
              }
        }
        style={styles.bookCover}
      />
      <View style={styles.summaryContainer}>
        <Text style={styles.bookTitle}>{book.title}</Text>
        <Text style={styles.authorName}>{book.author}</Text>
      </View>
    </View>
  );
}

export default BookCard;
