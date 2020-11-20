import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import BookCard from '@components/BookCard';
import { IBook } from '@interfaces/BookInfo';
import { BOOKS_MOCK } from '@constants/mockBooks';

const App = () => {
  const book: IBook[] = BOOKS_MOCK;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          {book.map(item => (
            <BookCard key={item.id} book={item} />
          ))}
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
