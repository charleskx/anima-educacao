import produce from 'immer';

const INITAL_STATE = {
  open: false,
  employee: {},
};

export default function dialog(state = INITAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@dialog/OPEN_DIALOG': {
        draft.employee = action.payload.employee;
        draft.open = true;
        break;
      }

      case '@dialog/CLOSE_DIALOG': {
        draft.open = false;
        break;
      }

      default:
    }
  });
}
