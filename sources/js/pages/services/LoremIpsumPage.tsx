/**
 * Vendor
 */

import React from 'react';

/**
 * Components
 */

import { Section } from '@/components/common';
import LoremIpsum from '@/components/LoremIpsum';

/**
 * Typings
 */

import { ILoremIpsumPage } from '../interfaces';

type ILoremIpsumPageProps = ILoremIpsumPage;

/**
 * Expo
 */

const LoremIpsumPage: React.FC<ILoremIpsumPageProps> = () => (
  <Section title="lorem ipsum generator (ivc edition)" goBackTo="/services">
    <h2>lorem ipsum generator (ivc edition)</h2>
    <LoremIpsum />
  </Section>
);

export default LoremIpsumPage;
