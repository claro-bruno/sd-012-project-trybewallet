import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Description extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="description">
        Descrição:
        <input type="text" id="description" onChange={ handleChange } />
      </label>
    );
  }
}

Description.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
