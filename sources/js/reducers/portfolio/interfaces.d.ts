export interface IPortfolioItem {
  readonly id: number;
  readonly title: string;
}

export interface IPortfolioState {
  readonly items: ReadonlyArray<IPortfolioItem>;
  readonly count: number;
}
