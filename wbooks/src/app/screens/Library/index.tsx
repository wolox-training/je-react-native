import React from 'react';
import { SafeAreaView, View } from 'react-native';
import BookList from '@components/BookList';
import { IBook } from '@interfaces/BookInfo';
import { BOOKS_MOCK } from '@constants/mockBooks';

import styles from './styles';

function Library() {
  const book: IBook[] = BOOKS_MOCK;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BookList bookArray={book} />
      </View>
    </SafeAreaView>
  );
}

export default Library;
