import {all} from 'redux-saga/effects';

import pokedexSaga from './pokedex/saga';

export default function* rootSaga() {
  return yield all([pokedexSaga]);
}
