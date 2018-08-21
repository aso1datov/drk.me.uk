import React from 'react';
import Section from '../../components/Section/Section';
import LoremIpsum from '../../components/LoremIpsum/LoremIpsum';

const LoremIpsumPage = () => (
  <Section title="lorem ipsum generator (ivc edition)" goBackTo="/services">
    <h2>lorem ipsum generator (ivc edition)</h2>
    <LoremIpsum />
  </Section>
);

export default LoremIpsumPage;
