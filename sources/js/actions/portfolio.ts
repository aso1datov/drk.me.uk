import { portfolioConstants } from '../reducers/portfolio/constants';
import ApiService from '../services/ApiService';

export const setPortfolioList = (items = [], count = 0) => ({
  type: portfolioConstants.SET_PORTFOLIO_LIST_SUCCESS,
  items,
  count,
});

export const startSetPortfolioList = options => dispatch =>
  ApiService.get('/portfolio', options).then(data =>
    dispatch(setPortfolioList(data.items))
  );
