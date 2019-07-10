/**
 * Vendor
 */

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Components
 */

import Section from '@/components/Section';

/**
 * Expo
 */

const ServicesPage = () => (
  <Section title="Services">
    <h2>Services</h2>

    <ul>
      <li>
        <Link to="/services/vk-likes-remover">VK likes remover</Link>
      </li>
      <li>
        <Link to="/services/canteen-selector">Canteen selector</Link>
      </li>
      <li>
        <Link to="/services/lorem-ipsum">
          lorem ipsum generator (ivc edition)
        </Link>
      </li>
    </ul>
  </Section>
);

export default ServicesPage;
