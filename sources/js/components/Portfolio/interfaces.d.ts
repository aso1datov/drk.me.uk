import { IPortfolioItem } from '@/reducers/portfolio/interfaces';

export interface IPortfolioList {
  readonly portfolios: ReadonlyArray<IPortfolioItem>;
}

export interface IPortfolioListItem {
  readonly title: string;
}
