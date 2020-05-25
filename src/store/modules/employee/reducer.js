import produce from 'immer';

const INITAL_STATE = {
  employees: [],
  loading: false,
};

export default function employee(state = INITAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@empoyee/EMPLOYEE_REQUEST':
      case '@employee/EMPLOYEE_UPDATE': {
        draft.loading = true;
        break;
      }

      case '@employee/EMPLOYEE_SUCCESS': {
        draft.loading = false;
        draft.employees = action.payload.employees;
        break;
      }

      case '@employee/EMPLOYEE_UPDATE_SUCCESS': {
        draft.loading = false;
        draft.employees = draft.employees.map((data) => {
          if (data.id === action.payload.id) {
            data.salary += action.payload.salary;
          }

          return data;
        });
        break;
      }

      case '@employeed/REQUEST_FAILED': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
