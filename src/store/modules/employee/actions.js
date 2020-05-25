export function employeeRequest() {
  return {
    type: '@empoyee/EMPLOYEE_REQUEST',
  };
}

export function employeeSuccess(employees) {
  return {
    type: '@employee/EMPLOYEE_SUCCESS',
    payload: { employees },
  };
}

export function employeeUpdate(id, employee) {
  return {
    type: '@employee/EMPLOYEE_UPDATE',
    payload: { id, employee },
  };
}

export function employeeUpdateSuccess(id, salary) {
  return {
    type: '@employee/EMPLOYEE_UPDATE_SUCCESS',
    payload: { id, salary },
  };
}

export function requestFailed() {
  return {
    type: '@employeed/REQUEST_FAILED',
  };
}
