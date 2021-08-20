import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {getPokedex, resetPokedex} from '../../store/modules/pokedex/actions';
import {ROUTES} from '../../constants/routes';

import styles from './styles';

export const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const pokedex = useSelector(state => state.pokedex.pokedex);
  const isLoadingPokedex = useSelector(state => state.pokedex.isLoadingPokedex);

  const searchPokedex = () => {
    dispatch(resetPokedex());
    dispatch(getPokedex());
  };

  const navigateToPokemonDetails = pokemon => {
    const pokemonId = pokemon.url.split('pokemon/')[1].replace('/', '');

    navigation.navigate(ROUTES.DETAILS, {id: pokemonId});
  };

  const renderListItem = ({item}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigateToPokemonDetails(item)}>
      <Text style={styles.itemName}>{item?.name}</Text>
    </TouchableOpacity>
  );

  const renderListHeader = () => (
    <View style={styles.listHeader}>
      <Text style={styles.title}>Saga Pokedex</Text>
      <Text style={styles.description}>
        Clique no botão abaixo para pesquisar
      </Text>

      <TouchableOpacity style={styles.searchButton} onPress={searchPokedex}>
        <Text style={styles.buttonText}>Buscar Pokedex</Text>
      </TouchableOpacity>
    </View>
  );

  const renderListEmptyContent = () => {
    if (isLoadingPokedex) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={54} color="blue" />
        </View>
      );
    }

    return null;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={pokedex}
        keyExtractor={_ => String(Math.random())}
        renderItem={renderListItem}
        ListHeaderComponent={renderListHeader}
        ListEmptyComponent={renderListEmptyContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
