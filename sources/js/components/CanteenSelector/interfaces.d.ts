import { CSSProperties } from 'react';

export interface ICanteenSelector {
  readonly colors: ReadonlyArray<string>;
  readonly data: ICanteens;
  readonly width: number;
  readonly height: number;
  readonly doughnutHoleSize: number;
  readonly rotateDuration: number;
}

export interface ICanteens {
  [x: string]: number;
}

export interface ICanteenSelectorState {
  rotate: boolean;
  degrees: number;
  selected: string | null;
}

export interface IChartCoords {
  centerX: number;
  centerY: number;
  radius: number;
}

export interface ICanteenList {
  readonly colors: ReadonlyArray<string>;
  readonly canteens: ICanteens;
  readonly selected: string;
}

export interface ICustomVariables extends CSSProperties {
  [x: string]: string | number;
}
