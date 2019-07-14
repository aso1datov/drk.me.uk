import { IPortfolioItem } from '@/reducers/portfolio/interfaces';

export interface IPortfolioList {
  readonly portfolios: ReadonlyArray<IPortfolioItem>;
}
