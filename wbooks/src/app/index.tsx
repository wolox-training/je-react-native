import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import BookList from '@components/BookList';
import { IBook } from '@interfaces/BookInfo';
import { BOOKS_MOCK } from '@constants/mockBooks';

import styles from './styles';

const App = () => {
  const book: IBook[] = BOOKS_MOCK;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <BookList bookArray={book} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
