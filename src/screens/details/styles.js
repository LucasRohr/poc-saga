import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  title: {
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 14,
  },

  backButton: {
    marginBottom: 40,
  },

  backText: {
    fontSize: 22,
    fontWeight: '500',
    color: '#3C37EF',
  },

  pokemonImageContainer: {
    borderRadius: 80,
    borderColor: '#19181C',
    borderWidth: 0.5,
    width: 150,
    height: 150,
    alignSelf: 'center',
  },

  image: {
    width: 150,
    height: 150,
  },

  infoContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: 35,
  },

  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
  },

  mainText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#2d2727',
    textTransform: 'capitalize',
  },

  name: {
    marginRight: 10,
  },

  infoBody: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderBottomWidth: 0.3,
    paddingBottom: 30,
    borderBottomColor: '#19181C',
  },

  infoText: {
    fontSize: 22,
    fontWeight: '500',
    color: '#2d2727',
    textTransform: 'capitalize',
  },

  typesContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },

  typesTitle: {
    fontSize: 22,
    fontWeight: '500',
    color: '#3C37EF',
  },

  typesText: {
    fontSize: 22,
    fontWeight: '500',
    color: '#2d2727',
    marginTop: 10,
    textTransform: 'capitalize',
  },

  loadingContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
