import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';

import {getPokemon} from '../../store/modules/pokedex/actions';

import styles from './styles';

const MIN_POKEMON_TYPES = 1;

export const Details = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const pokemon = useSelector(state => state.pokedex.pokemonDetails);
  const isLoadingPokemon = useSelector(state => state.pokedex.isLoadingPokemon);

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const getPokemonDetails = () => {
      const id = route.params?.id;

      dispatch(getPokemon({id}));
    };

    getPokemonDetails();
  }, [dispatch, route.params?.id]);

  const renderPokemonImage = () => {
    const imageUri = pokemon?.sprites?.front_default;

    return (
      <View style={styles.pokemonImageContainer}>
        <Image style={styles.image} source={{uri: imageUri}} />
      </View>
    );
  };

  const renderPokemonBaseInfo = () => {
    const {name, id, weight, height} = pokemon;

    return (
      <View style={styles.infoContainer}>
        <View style={styles.nameContainer}>
          <Text style={[styles.mainText, styles.name]}>{name}</Text>
          <Text style={styles.mainText}>#{id}</Text>
        </View>

        <View style={styles.infoBody}>
          <Text style={styles.infoText}>Peso: {weight}</Text>
          <Text style={styles.infoText}>Altura: {height}</Text>
        </View>
      </View>
    );
  };

  const renderPokemonType = () => {
    const {types} = pokemon;

    const mappedTypes = types.map(typeObject => typeObject.type.name);
    const typesText = mappedTypes.join(', ');

    const typesLabel =
      mappedTypes?.length === MIN_POKEMON_TYPES ? 'Tipo' : 'Tipos';

    return (
      <View style={styles.typesContainer}>
        <Text style={styles.typesTitle}>{typesLabel}:</Text>
        <Text style={styles.typesText}>{typesText}</Text>
      </View>
    );
  };

  const renderContent = () => {
    if (isLoadingPokemon) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={54} color="blue" />
        </View>
      );
    }

    if (pokemon) {
      return (
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={goBack}>
              <Text style={styles.backText}>Voltar</Text>
            </TouchableOpacity>

            {renderPokemonImage()}
            {renderPokemonBaseInfo()}
            {renderPokemonType()}
          </View>
        </ScrollView>
      );
    }

    return null;
  };

  return renderContent();
};
