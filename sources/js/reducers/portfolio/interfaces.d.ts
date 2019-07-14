export interface IPortfolioItem {
  readonly id: number;
  readonly title: string;
}

export interface IPortfolio {
  readonly items: ReadonlyArray<IPortfolioItem>;
  readonly count: number;
}
