import React from 'react';
import { string, array } from 'prop-types';

const PhrasesList = ({ type, phrases }) => {
  switch (type) {
    case 'paragraph':
      return phrases.map((phrase, i) => <p key={i}>{phrase}</p>);
    case 'list':
      return <ul>{phrases.map((phrase, i) => <li key={i}>{phrase}</li>)}</ul>;
    default:
      return <h2>Choose type</h2>;
  }
};

PhrasesList.propTypes = {
  type: string.isRequired,
  phrases: array.isRequired,
};

export default PhrasesList;
