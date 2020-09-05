/**
 * Typings
 */

import { AnyAction, Reducer } from 'redux';

export type UserState = Readonly<{
  isAuthenticated: boolean;
}>;

/**
 * Inital state
 */

const initialState: UserState = {
  isAuthenticated: false,
};

/**
 * Expo
 */

const reducer: Reducer<UserState, AnyAction> = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
