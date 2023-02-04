import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
// TIP sempre que criarmos um reducer devemos coloca-lo aqui.
export default combineReducers({
  auth,
  user,
});
// REDUX rooReducer
