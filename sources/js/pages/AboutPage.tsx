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
    <ul>
      <li>
        <a href="https://github.com/aso1datov" target="_blank">
          github
        </a>
      </li>
      <li>
        <a href="https://moikrug.ru/alxdrk" target="_blank">
          moikrug
        </a>
      </li>
    </ul>
  </Section>
);

export default AboutPage;
