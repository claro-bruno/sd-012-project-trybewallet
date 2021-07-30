import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Currencies extends Component {
  render() {
    const { currencies, handleChange } = this.props;
    return (
      <label htmlFor="currency">
        Moeda:
        <select id="currency" onChange={ handleChange }>
          {
            currencies.map((item, i) => (
              <option key={ i } value={ item }>
                {item}
              </option>
            ))
          }
        </select>
      </label>
    );
  }
}

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Currencies;
