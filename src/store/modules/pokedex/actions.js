import * as types from './types';

export function getPokedex() {
  return {
    type: types.GET_POKEDEX,
  };
}

export function getPokedexSuccess(payload) {
  return {
    type: types.GET_POKEDEX_SUCCESS,
    payload,
  };
}

export function getPokedexFailure() {
  return {
    type: types.GET_POKEDEX_FAILURE,
  };
}

export function resetPokedex() {
  return {
    type: types.RESET_POKEDEX,
  };
}

export function getPokemon(payload) {
  return {
    type: types.GET_POKEMON,
    payload,
  };
}

export function getPokemonSuccess(payload) {
  return {
    type: types.GET_POKEMON_SUCCESS,
    payload,
  };
}

export function getPokemonFailure() {
  return {
    type: types.GET_POKEMON_FAILURE,
  };
}
