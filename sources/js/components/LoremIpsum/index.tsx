/**
 * Vendor
 */

import React, { PureComponent } from 'react';

/**
 * Components
 */

import PhrasesList from './PhrasesList';
import { Button } from '@/components/common';

/**
 * Typings
 */

import { ILoremIpsum, ILoremIpsumState } from './interfaces';

type ILoremIpsumProps = ILoremIpsum;

/**
 * Phrases
 */

import { phrases } from './phrases';

/**
 * Utils
 */

import { shuffle } from '@/utils';

/**
 * Expo
 */

class LoremIpsum extends PureComponent<ILoremIpsumProps, ILoremIpsumState> {
  state = {
    type: 'paragraph',
    lines: 10,
    generated: [''],
  };

  public handleLinesChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const lines = parseInt(target.value, 10) || 1;

    if (!isNaN(lines)) {
      this.setState(() => ({ lines }));
    }
  };

  public handleTypeChange = ({
    target,
  }: React.ChangeEvent<HTMLSelectElement>): void => {
    this.setState(() => ({ type: target.value }));
  };

  public makePhrases = (): void => {
    const { lines } = this.state;
    const generated = shuffle(phrases).slice(0, lines);

    this.setState(() => ({ generated }));
  };

  public render(): React.ReactElement {
    const { type, lines, generated } = this.state;

    return (
      <div className="lorem-ipsum-generator">
        <fieldset className="lorem-ipsum-generator-settings">
          <span className="field-inline">
            <label htmlFor="lines">Lines:</label>{' '}
            <input
              id="lines"
              className="form-control"
              type="text"
              name="lines"
              size={4}
              value={lines}
              onChange={this.handleLinesChange}
              maxLength={3}
            />
          </span>

          <span className="field-inline">
            <label htmlFor="type">Type: </label>{' '}
            <select
              id="type"
              className="form-control"
              name="lines"
              value={type}
              onChange={this.handleTypeChange}
            >
              <option value="paragraph">Paragraph</option>
              <option value="list">List</option>
            </select>
          </span>

          <Button onClick={this.makePhrases}>Generate</Button>
        </fieldset>

        <PhrasesList type={type} phrases={generated} />
      </div>
    );
  }
}

export default LoremIpsum;
