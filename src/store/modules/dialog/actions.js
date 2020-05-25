export function open(employee) {
  return {
    type: '@dialog/OPEN_DIALOG',
    payload: { employee },
  };
}

export function close() {
  return {
    type: '@dialog/CLOSE_DIALOG',
  };
}
