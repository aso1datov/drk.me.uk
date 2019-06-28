/**
 * Vendor
 */

import React, { PureComponent, createRef } from 'react';
import cn from 'classnames';
import { number, array, object } from 'prop-types';

/**
 * Components
 */

import CanteenList from './CanteenList';

/**
 * Utils
 */

import { getRandomInt, radiansToDegrees } from '@/utils';

class CanteenSelector extends PureComponent {
  static propTypes = {
    colors: array.isRequired,
    data: object.isRequired,
    width: number,
    height: number,
    doughnutHoleSize: number,
    rotateDuration: number,
  };

  static defaultProps = {
    data: {},
    width: 300,
    height: 300,
    doughnutHoleSize: 0.5,
    rotateDuration: 2500,
  };

  constructor(props) {
    super(props);

    this.$canvasRef = createRef();
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

  componentDidMount() {
    this.chart = this.$canvasRef.current;
    this.makeCanvas();
    this.setContext();
    this.draw();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  makeCanvas = () => {
    this.chart.width = this.props.width;
    this.chart.height = this.props.height;
  };

  setContext = () => {
    this.ctx = this.chart.getContext('2d');
  };

  /**
   * Get sum of values
   *
   * @return {number} Total
   */
  get total() {
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
  get coords() {
    return {
      centerX: this.chart.width / 2,
      centerY: this.chart.height / 2,
      radius: Math.min(this.chart.width / 2, this.chart.height / 2),
    };
  }

  /**
   * Draw line
   *
   * @param {number} startX - the X coordinate of the line starting point
   * @param {number} startY - the Y coordinate of the line starting point
   * @param {number} endX - the X coordinate of the line end point
   * @param {number} endY - the Y coordinate of the line end point
   */
  drawLine = (startX, startY, endX, endY) => {
    this.ctx.beginPath();
    this.ctx.moveTo(startX, startY);
    this.ctx.lineTo(endX, endY);
    this.ctx.stroke();
  };

  /**
   * Draw arc
   *
   * @param {number} centerX - the X coordinate of the circle center
   * @param {number} centerY - the Y coordinate of the circle center
   * @param {number} radius - the X coordinate of the line end point
   * @param {number} startAngle - the start angle in radians where the portion of the circle starts
   * @param {number} endAngle - the end angle in radians where the portion of circle ends
   */
  drawArc = (centerX, centerY, radius, startAngle, endAngle) => {
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    this.ctx.stroke();
  };

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
  drawPieSlice = (centerX, centerY, radius, startAngle, endAngle, color) => {
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
  rotateCanvas = degrees => {
    this.setState(
      prevState => ({
        rotate: true,
        degrees: prevState.degrees + degrees,
      }),
      () => {
        this.getWinner(degrees);
      }
    );
  };

  /**
   * Draw pie chart
   *
   */
  draw = () => {
    const { data, colors, doughnutHoleSize } = this.props;
    const { centerX, centerY, radius } = this.coords;

    let startAngle = 0;
    let color = 0;
    let key;

    for (key in data) {
      if (data.hasOwnProperty(key)) {
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
  };

  selectCanteen = () => {
    this.rotateCanvas(getRandomInt(15, 1800));
  };

  /**
   * Find chosen slice
   *
   */
  getWinner = () => {
    const { degrees } = this.state;
    const point = 360 - (degrees % 360);

    clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      this.setState(() => ({ selected: this.findCanteen(point) }));
    }, this.props.rotateDuration);
  };

  findCanteen = point =>
    this.slices.reduce((acc, slice) => {
      const canteen = Object.keys(slice)[0];
      const [start, end] = slice[canteen];

      return point >= start && point < end ? canteen : acc;
    }, '');

  render() {
    const { data, colors, rotateDuration } = this.props;
    const { rotate, degrees, selected } = this.state;

    return (
      <div className="canteen-selector">
        <div className="canteen-selector-wrapper">
          <canvas
            className={cn('canteens-chart', { rotate })}
            style={{
              '--rotation': `${degrees}deg`,
              '--rotate-duration': `${rotateDuration}ms`,
            }}
            ref={this.$canvasRef}
          />
          <button
            type="button"
            className="btn-spin"
            onClick={this.selectCanteen}
          >
            Spin
          </button>
        </div>

        <div className="chart-legend">
          <CanteenList canteens={data} colors={colors} selected={selected} />
        </div>
      </div>
    );
  }
}

export default CanteenSelector;
