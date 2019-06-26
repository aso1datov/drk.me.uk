/**
 * Vendor
 */

import React from 'react';

/**
 * Components
 */

import Section from '@/components/Section';
import VKLikesRemover from '@/components/VKLikesRemover';

/**
 * Expo
 */

const VKLikesRemoverPage = () => (
  <Section title="VK likes remover" goBackTo="/services">
    <h2>VK likes remover (beta)</h2>
    <VKLikesRemover />
  </Section>
);

export default VKLikesRemoverPage;
