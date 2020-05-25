import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import {
  requestFailed,
  employeeSuccess,
  employeeUpdateSuccess,
} from './actions';

export function* employees() {
  try {
    const request = yield call(api.get, 'employees');

    const { data } = request.data;
    const serialized = data.map((employee) => ({
      ...employee,
      salary: 0,
    }));

    yield put(employeeSuccess(serialized));
  } catch (err) {
    yield put(requestFailed());
  }
}

export function* update({ payload }) {
  try {
    const { id, employee: salary } = payload;

    const { data } = yield call(api.put, `update/${id}`, { salary });

    yield put(employeeUpdateSuccess(id, data.salary || salary));
  } catch (err) {
    yield put(requestFailed());
  }
}

export default all([
  takeLatest('@empoyee/EMPLOYEE_REQUEST', employees),
  takeLatest('@employee/EMPLOYEE_UPDATE', update),
]);
