import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class InputCurrency extends Component {
  render() {
    const { myWallet, handleChange } = this.props;
    const { currencies } = myWallet;

    return (
      <label htmlFor="currency">
        Moeda
        <select required id="currency" onChange={ handleChange } name="currency">
          { currencies.map(
            (currency, index) => (
              <option key={ index }>
                { currency }
              </option>),
          )}
        </select>
      </label>
    );
  }
}

InputCurrency.propTypes = {
  handleChange: PropTypes.func.isRequired,
  myWallet: PropTypes.objectOf(
    PropTypes.string, PropTypes.array, PropTypes.bool,
  ).isRequired,
};

const mapStateToProps = (state) => ({
  myWallet: state.wallet,
});

export default connect(mapStateToProps)(InputCurrency);
