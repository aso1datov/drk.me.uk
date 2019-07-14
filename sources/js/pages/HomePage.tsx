/**
 * Vendor
 */

import React from 'react';

/**
 * Components
 */

import Section from '@/components/Section';

/**
 * Interfaces
 */

import { IHomePage } from './interfaces';
type IHomePageProps = IHomePage;

/**
 * Expo
 */

const HomePage: React.FC<IHomePageProps> = () => (
  <Section title="Home">
    <h2>Home</h2>
  </Section>
);

export default HomePage;
