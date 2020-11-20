import { StyleSheet } from 'react-native';
import { DARK_GREY, WITHE_BACKGROUD } from '@constants/colors';

export default StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: WITHE_BACKGROUD,
    flexShrink: 1,
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30
  },
  summaryContainer: {
    marginLeft: 20,
    flexShrink: 1
  },
  bookCover: {
    width: 40,
    height: 60
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: DARK_GREY
  },
  authorName: {
    color: DARK_GREY
  }
});
