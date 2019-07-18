/**
 * Vendor
 */

import React, { Fragment } from 'react';

/**
 * Typings
 */
import { IPhrasesList } from './interfaces';

type IPhrasesListProps = IPhrasesList;

/**
 * Expo
 */

const PhrasesList: React.FC<IPhrasesListProps> = ({ type, phrases }) => {
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
