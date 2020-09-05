/**
 * Vendor
 */

import React from 'react';
import cn from 'classnames';

/**
 * Typings
 */

import { ICanteenList } from './interfaces';

type ICanteenListProps = ICanteenList;

/**
 * Expo
 */

const CanteenList: React.FC<ICanteenListProps> = ({ canteens = {}, colors = [], selected }) => (
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

export default CanteenList;
