import React from 'react';
import Section from '../../components/Section/Section';
import VKLikesRemover from '../../components/VKLikesRemover/VKLikesRemover';

const VKLikesRemoverPage = () => (
  <Section title="VK likes remover" goBackTo="/services">
    <h2>VK likes remover (beta)</h2>
    <VKLikesRemover />
  </Section>
);

export default VKLikesRemoverPage;
