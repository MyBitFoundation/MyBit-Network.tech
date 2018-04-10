import { TEST_ACTION } from '../actions/types';

const INITIAL_STATE = { testVar: true };

export default (state = INITIAL_STATE, action) => {
  if (action.type == TEST_ACTION) {
    return { ...state, testVar: action.payload };
  }
  return state;
};
