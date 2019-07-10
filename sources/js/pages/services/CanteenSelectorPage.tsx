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
 * Data
 */

import canteens from '@/components/CanteenSelector/canteens';

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

const CanteenSelectorPage: React.FC = () => (
  <Section title="Canteen Selector" goBackTo="/services">
    <h2>Canteen Selector</h2>
    <CanteenSelector data={canteens} colors={colors} />
  </Section>
);

export default CanteenSelectorPage;
