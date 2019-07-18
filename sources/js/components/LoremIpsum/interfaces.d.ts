export interface ILoremIpsumState {
  type: string;
  lines: number;
  generated: string[];
}

export interface ILoremIpsum {}

export interface IPhrasesList {
  readonly type: string;
  readonly phrases: ReadonlyArray<String>;
}
