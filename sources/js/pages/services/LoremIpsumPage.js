/**
 * Vendor
 */

import React from 'react';

/**
 * Components
 */

import Section from '@/components/Section';
import LoremIpsum from '@/components/LoremIpsum';

/**
 * Expo
 */

const LoremIpsumPage = () => (
  <Section title="lorem ipsum generator (ivc edition)" goBackTo="/services">
    <h2>lorem ipsum generator (ivc edition)</h2>
    <LoremIpsum />
  </Section>
);

export default LoremIpsumPage;
