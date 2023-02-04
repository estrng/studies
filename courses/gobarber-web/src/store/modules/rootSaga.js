import { all } from 'redux-saga/effects';
import auth from './auth/sagas';
import user from './user/sagas';
// TIP sempre que criarmos um saga devemos coloca-lo aqui.
export default function* rootSaga() {
  return yield all([auth, user]);
}
// REDUX rootSaga
