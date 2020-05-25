import { combineReducers } from 'redux';

import dialog from './dialog/reducer';
import employee from './employee/reducer';

export default combineReducers({
  dialog,
  employee,
});
