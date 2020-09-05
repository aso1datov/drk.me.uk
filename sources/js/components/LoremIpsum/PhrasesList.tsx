/**
 * Vendor
 */

import React, { Fragment } from 'react';

/**
 * Typings
 */

type PhrasesListProps = Readonly<{
  type: 'paragraph' | 'list';
  phrases: ReadonlyArray<String>;
}>;

/**
 * Expo
 */

const PhrasesList: React.FC<PhrasesListProps> = ({ type, phrases }) => {
  switch (type) {
    case 'paragraph':
      return (
        <Fragment>
          {phrases.map((phrase, i) => (
            <p key={i}>{phrase}</p>
          ))}
        </Fragment>
      );
    case 'list':
      return (
        <ul>
          {phrases.map((phrase, i) => (
            <li key={i}>{phrase}</li>
          ))}
        </ul>
      );
    default:
      return <h2>Choose type</h2>;
  }
};

export default PhrasesList;
