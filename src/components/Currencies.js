import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Currencies extends Component {
  render() {
    const { currencies } = this.props;
    const currenciesFiltered = Object.keys(currencies)
      .filter((currency) => currency !== 'USDT');
    return (
      <>
        {currenciesFiltered.map((itens, index) => {
          if (itens !== 'USDT') {
            return (
              <option key={ index }>
                { itens }
              </option>);
          }
          return null;
        })}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps)(Currencies);
