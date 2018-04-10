import { TEST_ACTION } from './types';

export const sendTestAction = val => {
  return {
    type: TEST_ACTION,
    payload: val
  };
};
