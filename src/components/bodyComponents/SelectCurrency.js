import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SelectCurrency extends React.Component {
  render() {
    const { currencies } = this.props;
    const { onChange, currency } = this.props;
    return (
      <label htmlFor="currency">
        Moeda
        <select
          name="currency"
          id="currency"
          value={ currency }
          onChange={ onChange }
        >
          {
            currencies.map((curr) => <option key={ curr }>{ curr }</option>)
          }
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

SelectCurrency.propTypes = {
  onChange: PropTypes.func,
  currency: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(SelectCurrency);
