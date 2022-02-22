import { produce } from 'immer';
import { createAction, handleActions } from 'redux-actions';

// [ types ]
export const FETCH_NUMBER = 'tutorial/fetch_number';
const SET_NUMBER = 'tutorial/set_number';

// [ actions ]
export const fetchNumber = createAction(FETCH_NUMBER);
export const setNumber = createAction(SET_NUMBER);

// [ data structures ]
export const TUTORIAL_INITIAL_STATE = {
  number: 0,
};

// [ reducer ]
export default handleActions(
  {
    [SET_NUMBER]: (state, action) => {
      const { payload } = action;
      return produce(state, (draft) => {
        draft.number = payload;
      });
    },
  },
  TUTORIAL_INITIAL_STATE,
);
