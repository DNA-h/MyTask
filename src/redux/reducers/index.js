import {combineReducers} from 'redux';

import {loadingReducer} from './loadingReducer/loadingReducer';

export const reducers = combineReducers({
  loading: loadingReducer,
});
