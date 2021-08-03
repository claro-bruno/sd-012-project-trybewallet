import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Currencies extends Component {
  render() {
    const { options, onChange, value } = this.props;
    return (
      <label htmlFor="currency">
        Moeda
        <select
          id="currency"
          name="currency"
          onChange={ onChange }
          value={ value }
        >
          {
            options.map((currency, index) => (
              <option key={ index } value={ currency }>
                { currency }
              </option>
            ))
          }
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  options: state.wallet.currencies,
});

Currencies.propTypes = {
  options: propTypes.arrayOf().isRequired,
};

export default connect(mapStateToProps)(Currencies);
