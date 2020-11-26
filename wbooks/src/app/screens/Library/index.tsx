import React from 'react';
import { SafeAreaView, View } from 'react-native';
import BookList from '@components/BookList';
import { connect } from 'react-redux';
import { actionCreators } from '@redux/books/actions';
import { IBook } from '@interfaces/BookInfo';

import styles from './styles';

interface IProps {
  bookList: IBook[];
  getBookList: () => void;
}

function Library({ bookList, getBookList }: IProps) {
  getBookList();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BookList bookArray={bookList} />
      </View>
    </SafeAreaView>
  );
}

const mapStateToProps = ({ bookList }: any) => {
  return {
    bookList
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getBookList() {
      dispatch(actionCreators.getBookList());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Library);
