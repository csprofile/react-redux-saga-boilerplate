import { all } from 'redux-saga/effects';
import boilerplate from './boilerplateSaga';

function* buildSagas():unknown {
  yield all([
    ...boilerplate
  ]);
}

export default buildSagas;