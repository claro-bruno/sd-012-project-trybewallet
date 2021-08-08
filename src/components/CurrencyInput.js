import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CurrencyInput extends Component {
  render() {
    const { handle, value } = this.props;
    const { currencies } = this.props;
    // console.log('handle', handle);
    return (
      <label htmlFor="currency-input">
        Moeda
        <select
          id="currency-input"
          name="currency"
          onChange={ handle }
          value={ value }
        >
          { currencies && currencies.map((coin) => (
            <option key={ coin }>{ coin }</option>
          )) }
        </select>
      </label>
    );
  }
}

CurrencyInput.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(CurrencyInput);
