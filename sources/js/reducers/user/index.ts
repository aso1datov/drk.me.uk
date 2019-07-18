/**
 * Typings
 */

import { AnyAction, Reducer } from 'redux';
import { IUserState } from './interfaces';

/**
 * Inital state
 */

const initialState: IUserState = {
  isAuthenticated: false,
};

/**
 * Expo
 */

const reducer: Reducer<IUserState, AnyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
