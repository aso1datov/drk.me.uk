/**
 * Constants
 */

import { portfolioConstants } from './constants';

/**
 * Interfaces
 */

import { IPortfolio } from './interfaces';
import { AnyAction, Reducer } from 'redux';

/**
 * Initial state
 */

const initialState: IPortfolio = {
  items: [],
  count: 0,
};

/**
 * Expo
 */

const reducer: Reducer<IPortfolio, AnyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case portfolioConstants.SET_PORTFOLIO_LIST_SUCCESS:
      const { items, count } = action.payload;

      return {
        ...state,
        items,
        count,
      };
    default:
      return state;
  }
};

export default reducer;
