export interface IMenu {
  readonly navigation: ReadonlyArray<IMenuItem>;
}

export interface IMenuItem {
  readonly to: string;
  readonly title: string;
  readonly exact: boolean;
}
