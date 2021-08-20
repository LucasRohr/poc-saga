import {Alert} from 'react-native';

import {takeLatest, put, all} from 'redux-saga/effects';

import * as types from './types';
import * as actions from './actions';

import {ApiService} from '../../../api';

const OK_STATUS = 200;

const delay = ms => new Promise(res => setTimeout(res, ms));

function* handleCatchError() {
  Alert.alert(
    'Erro de conexão!',
    'Ocorreu um erro ao se conectar com o servidor, tente de novo!',
  );

  yield put(actions.getPokedexFailure());
}

function* getPokedex() {
  try {
    yield delay(1200);

    const pokedexSearchUrl = 'pokemon?limit=100';

    const {data, status} = yield ApiService.get(pokedexSearchUrl);

    const isSuccess = status === OK_STATUS;

    if (isSuccess) {
      Alert.alert('Sucesso!', 'Sua Pokedex foi retornada com êxito!');

      yield put(actions.getPokedexSuccess({returnedPokedex: data.results}));

      return true;
    } else {
      Alert.alert(
        'Algo deu errado!',
        'Ocorreu um erro ao retornar sua Pokedex, tente de novo!',
      );

      yield put(actions.getPokedexFailure());

      return false;
    }
  } catch (error) {
    yield handleCatchError();

    return false;
  }
}

function* getPokemon(action) {
  try {
    yield delay(1200);

    const pokemonId = action.payload.id;
    const pokedexSearchUrl = `pokemon/${pokemonId}`;

    const {data, status} = yield ApiService.get(pokedexSearchUrl);

    const isSuccess = status === OK_STATUS;

    if (isSuccess) {
      yield put(actions.getPokemonSuccess({pokemon: data}));

      return true;
    } else {
      Alert.alert(
        'Algo deu errado!',
        'Ocorreu um erro ao retornar seu Pokemon, tente de novo!',
      );

      yield put(actions.getPokemonFailure());

      return false;
    }
  } catch (error) {
    yield handleCatchError();

    return false;
  }
}

export default all([
  takeLatest(types.GET_POKEDEX, getPokedex),
  takeLatest(types.GET_POKEMON, getPokemon),
]);
