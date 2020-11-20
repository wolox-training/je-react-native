import { StyleSheet } from 'react-native';
import { DARK_GREY, WITHE_BACKGROUD, SHADOW_COLOR } from '@constants/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: WITHE_BACKGROUD,
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 10,
    borderRadius: 5,
    elevation: 1,
    shadowColor: SHADOW_COLOR,
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0
    }
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
