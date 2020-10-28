import { createAction, createReducer } from '@reduxjs/toolkit'
import { IBoilerplate } from '../../interfaces/boilerplateInterfaces'
import { IBoilerplateAction } from 'interfaces/reducerInterfaces';

export const types = {
  FETCH_SAGA: 'repositories/FETCH_SAGA',
  UPDATE: 'repositories/UPDATE'
};

export const actions = {
  fetchSaga: createAction(types.FETCH_SAGA),
  update: createAction<IBoilerplate>(types.UPDATE)
};

const initialState: IBoilerplate = {
  data:[]
};

const reducerObject = createReducer(initialState, (builder) => {
  builder
    .addCase(types.UPDATE, (state, action:IBoilerplateAction) => {
      return {
        ...state,
        ...action.payload
      }
    }
)});

export default reducerObject;