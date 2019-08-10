/**
 * Vendor
 */

import React, { PureComponent, createRef } from 'react';
import cn from 'classnames';

/**
 * Components
 */

import CanteenList from './CanteenList';
import { Button } from '@/components/common';

/**
 * Typings
 */

import {
  ICanteenSelector,
  ICanteenSelectorState,
  IChartCoords,
  ICustomVariables,
} from './interfaces';

type ICanteenSelectorProps = ICanteenSelector;

/**
 * Utils
 */

import { getRandomInt, radiansToDegrees } from '@/utils';

class CanteenSelector extends PureComponent<
  ICanteenSelector,
  ICanteenSelectorState
> {
  public $canvasRef: React.RefObject<HTMLCanvasElement>;
  public chart: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;
  public slices: Array<{ [x: string]: number[] }>;
  public timer: number;

  public static defaultProps = {
    data: {},
    width: 300,
    height: 300,
    doughnutHoleSize: 0.5,
    rotateDuration: 2500,
  };

  constructor(props: ICanteenSelectorProps) {
    super(props);

    this.$canvasRef = createRef<HTMLCanvasElement>();
    this.chart = null;
    this.ctx = null;
    this.slices = [];
    this.timer = null;

    this.state = {
      rotate: false,
      degrees: 0,
      selected: null,
    };
  }

  public componentDidMount(): void {
    this.chart = this.$canvasRef.current;
    this.makeCanvas();
    this.setContext();
    this.draw();
  }

  public componentWillUnmount(): void {
    clearTimeout(this.timer);
  }

  private makeCanvas(): void {
    this.chart.width = this.props.width;
    this.chart.height = this.props.height;
  }

  private setContext(): void {
    this.ctx = this.chart.getContext('2d');
  }

  /**
   * Get sum of values
   *
   * @return {number} Total
   */
  public get total(): number {
    return Object.values(this.props.data).reduce(
      (total, value) => total + value,
      0
    );
  }

  /**
   * Get chart coordinates
   *
   * @return {object} { centerX, centerY, radius }
   */
  public get coords(): IChartCoords {
    return {
      centerX: this.chart.width / 2,
      centerY: this.chart.height / 2,
      radius: Math.min(this.chart.width / 2, this.chart.height / 2),
    };
  }

  /**
   * Draw pie slice
   *
   * @param {number} centerX - the X coordinate of the circle center
   * @param {number} centerY - the Y coordinate of the circle center
   * @param {number} radius - the X coordinate of the line end point
   * @param {number} startAngle - the start angle in radians where the portion of the circle starts
   * @param {number} endAngle - the end angle in radians where the portion of circle ends
   * @param {string} color - the color used to fill slice
   */
  public drawPieSlice = (
    centerX: number,
    centerY: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    color: string
  ): void => {
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.moveTo(centerX, centerY);
    this.ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    this.ctx.closePath();
    this.ctx.fill();
  };

  /**
   * Rotate canvas
   *
   * @param {number} degrees Rotate angle in degrees
   */
  public rotateCanvas = (degrees: number): void => {
    this.setState(
      prevState => ({
        rotate: true,
        degrees: prevState.degrees + degrees,
      }),
      () => {
        this.getWinner();
      }
    );
  };

  /**
   * Draw pie chart
   *
   */
  private draw(): void {
    const { data, colors, doughnutHoleSize } = this.props;
    const { centerX, centerY, radius } = this.coords;

    let startAngle = 0;
    let color = 0;
    let key;

    for (key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        let sliceAngle = (2 * Math.PI * data[key]) / this.total;
        let endAngle = startAngle + sliceAngle;

        this.drawPieSlice(
          centerX,
          centerY,
          radius,
          startAngle,
          endAngle,
          colors[color % colors.length]
        );

        this.slices.push({
          [key]: [radiansToDegrees(startAngle), radiansToDegrees(endAngle)],
        });

        startAngle += sliceAngle;
        color++;
      }
    }

    if (doughnutHoleSize) {
      this.drawPieSlice(
        centerX,
        centerY,
        doughnutHoleSize * radius,
        0,
        2 * Math.PI,
        'white'
      );
    }
  }

  public selectCanteen = (): void => {
    this.rotateCanvas(getRandomInt(15, 1800));
  };

  /**
   * Find chosen slice
   *
   */
  public getWinner = (): void => {
    const { degrees } = this.state;
    const point = 360 - (degrees % 360);

    clearTimeout(this.timer);

    this.timer = window.setTimeout(() => {
      this.setState(() => ({ selected: this.findCanteen(point) }));
    }, this.props.rotateDuration);
  };

  public findCanteen = (point: number): string =>
    this.slices.reduce((acc, slice) => {
      const canteen = Object.keys(slice)[0];
      const [start, end] = slice[canteen];

      return point >= start && point < end ? canteen : acc;
    }, '');

  public render(): React.ReactElement {
    const { data, colors, rotateDuration } = this.props;
    const { rotate, degrees, selected } = this.state;
    const style: ICustomVariables = {
      '--rotation': `${degrees}deg`,
      '--rotate-duration': `${rotateDuration}ms`,
    };

    return (
      <div className="canteen-selector">
        <div className="canteen-selector-wrapper">
          <canvas
            className={cn('canteens-chart', { rotate })}
            style={style}
            ref={this.$canvasRef}
          />
          <Button
            type="button"
            className="btn-spin"
            onClick={this.selectCanteen}
          >
            Spin
          </Button>
        </div>

        <div className="chart-legend">
          <CanteenList canteens={data} colors={colors} selected={selected} />
        </div>
      </div>
    );
  }
}

export default CanteenSelector;
