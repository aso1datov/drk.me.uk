import { IPortfolioItem } from '@/reducers/portfolio/interfaces';

export interface IHomePage {}

export interface IAboutPage {}

export interface IServicesPage {}

export interface IPortfolioPage {
  readonly portfolios: ReadonlyArray<IPortfolioItem>;
  readonly startSetPortfolioList: (params?: any) => void;
}

export interface ICanteenSelectorPage {}
export interface ILoremIpsumPage {}
export interface IVKLikesRemoverPage {}
