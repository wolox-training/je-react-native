import React, { useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import BookList from '@components/BookList';
import { actionCreators } from '@redux/books/actions';
import { AppState } from '@interfaces/appInfo';

import styles from './styles';

function Library() {
  const bookList = useSelector((state: AppState) => state.bookList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreators.getBooks());
  }, [dispatch]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BookList bookArray={bookList} />
      </View>
    </SafeAreaView>
  );
}

export default Library;
