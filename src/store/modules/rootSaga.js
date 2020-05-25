import { all } from 'redux-saga/effects';

import dialog from './dialog/sagas';
import employee from './employee/sagas';

export default function* rootSaga() {
  return yield all([dialog, employee]);
}
