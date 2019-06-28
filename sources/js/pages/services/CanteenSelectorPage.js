/**
 * Vendor
 */

import React from 'react';

/**
 * Components
 */

import Section from '@/components/Section';
import CanteenSelector from '@/components/CanteenSelector';

/**
 * Utils
 */

import { getArithmeticMean } from '@/utils';

/**
 * Data
 */

const canteens = {
  'Дальняя у Собора': getArithmeticMean(8, 8, 6, 9),
  'С бесплатным компотом': getArithmeticMean(7, 5, 4, 4),
  'На измайловском': getArithmeticMean(8, 8, 9, 8),
  'У вокзала': getArithmeticMean(5, 9, 6, 7),
  'За 190': getArithmeticMean(2, 10, 0.5, 3),
  Варшавский: getArithmeticMean(5, 7, 7, 6),
  МЧС: getArithmeticMean(6, 5, 4, 8),
  Дальняя: getArithmeticMean(8, 9, 9, 7),
};

const colors = [
  '#6e40aa',
  '#bf3caf',
  '#fe4b83',
  '#ff7847',
  '#e2b72f',
  '#589c00',
  '#23abd8',
  '#cc0000',
];

/**
 * Expo
 */

const CanteenSelectorPage = () => (
  <Section title="Canteen Selector" goBackTo="/services">
    <h2>Canteen Selector</h2>
    <CanteenSelector data={canteens} colors={colors} />
  </Section>
);

export default CanteenSelectorPage;
