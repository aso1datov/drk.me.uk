/**
 * Vendor
 */

import React from 'react';

/**
 * Components
 */

import { Section } from '@/components/common';

/**
 * Typings
 */

import { IAboutPage } from './interfaces';

type IAboutPageProps = IAboutPage;

/**
 * Expo
 */

const AboutPage: React.FC<IAboutPageProps> = () => (
  <Section title="About">
    <h2>About</h2>
  </Section>
);

export default AboutPage;
