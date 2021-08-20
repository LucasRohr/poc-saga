import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },

  loadingContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50%',
  },

  listHeader: {
    alignItems: 'flex-start',
    marginBottom: 35,
    marginTop: 28,
  },

  title: {
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 14,
  },

  description: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 28,
  },

  searchButton: {
    width: '100%',
    height: 44,
    backgroundColor: '#3C37EF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#ffffff',
  },

  itemContainer: {
    width: '100%',
    height: 50,
    marginVertical: 10,
    backgroundColor: '#E6E6E6',
    borderRadius: 4,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  itemName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2d2727',
    textTransform: 'capitalize',
  },
});
