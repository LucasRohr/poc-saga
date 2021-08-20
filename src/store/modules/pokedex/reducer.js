import * as types from './types';

const initialState = {
  pokedex: [],
  isLoadingPokedex: false,
  pokemonDetails: null,
  isLoadingPokemon: false,
};

export default function pokedex(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_POKEDEX:
      return {
        ...state,
        isLoadingPokedex: true,
      };

    case types.GET_POKEDEX_SUCCESS:
      const {returnedPokedex} = action.payload;

      return {
        ...state,
        pokedex: returnedPokedex,
        isLoadingPokedex: false,
      };

    case types.GET_POKEDEX_FAILURE:
      return {
        ...state,
        isLoadingPokedex: false,
      };

    case types.RESET_POKEDEX:
      return {
        ...initialState,
      };

    case types.GET_POKEMON:
      return {
        ...state,
        isLoadingPokemon: true,
      };

    case types.GET_POKEMON_SUCCESS:
      const {pokemon} = action.payload;

      return {
        ...state,
        pokemonDetails: pokemon,
        isLoadingPokemon: false,
      };

    case types.GET_POKEMON_FAILURE:
      return {
        ...state,
        isLoadingPokemon: false,
      };

    default:
      return state;
  }
}
