import { call, takeLatest, put } from 'redux-saga/effects';
import { types, actions } from '../reducers/server/boilerplateReducer';
import api from '../api/builerplateApi';

function* fetch(){
  const response = yield call(api.get);
  yield put(actions.update({data: response}));
}

export default [ 
  takeLatest(types.FETCH_SAGA, fetch)
];
