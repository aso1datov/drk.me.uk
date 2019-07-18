import { IPortfolioState } from '@/reducers/portfolio/interfaces';

export interface IStore {
  portfolio: IPortfolioState;
  user: any;
}
