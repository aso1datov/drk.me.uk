/**
 * Vendor
 */

import React from 'react';
import cn from 'classnames';
import { array, object } from 'prop-types';

/**
 * Expo
 */

const CanteensList = ({ canteens, colors, selected }) => (
  <ul className="canteens-list">
    {Object.keys(canteens).map((canteen, i) => (
      <li
        key={canteen}
        className={cn('canteens-list-item', { selected: selected === canteen })}
        style={{ color: colors[i] }}
      >
        {canteen}
      </li>
    ))}
  </ul>
);

CanteensList.propTypes = {
  canteens: object.isRequired,
  colors: array.isRequired,
};

CanteensList.defaultProps = {
  canteens: {},
  colors: [],
};

export default CanteensList;
