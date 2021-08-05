import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tag extends Component {
  render() {
    const { tag, hadlechange } = this.props;
    return (
      <div>
        <label htmlFor="tag">
          Tag:
          <select
            id="tag"
            name="tag"
            value={ tag }
            onChange={ hadlechange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
  hadlechange: PropTypes.func.isRequired,
};

export default Tag;
