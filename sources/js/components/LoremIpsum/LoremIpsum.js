import React, { Component } from 'react';
import { phrases } from './phrases';
import { shuffle } from '../../utils';
import PhrasesList from './PhrasesList';

class LoremIpsum extends Component {
  state = {
    type: 'paragraph',
    lines: 10,
    generated: [],
  };

  handleLinesChange = ({ target }) => {
    const lines = parseInt(target.value, 10) || 1;

    if (!isNaN(lines)) {
      this.setState(() => ({ lines }));
    }
  };

  handleTypeChange = ({ target }) => {
    this.setState(() => ({ type: target.value }));
  };

  makePhrases = () => {
    const { lines } = this.state;
    const generated = shuffle(phrases).slice(0, lines);

    this.setState(() => ({ generated }));
  };

  render() {
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
              size="4"
              value={lines}
              onChange={this.handleLinesChange}
              maxLength="3"
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

          <button type="button" onClick={this.makePhrases}>
            Generate
          </button>
        </fieldset>

        <PhrasesList type={type} phrases={generated} />
      </div>
    );
  }
}

export default LoremIpsum;
