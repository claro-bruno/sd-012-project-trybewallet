import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Currencies extends Component {
  render() {
    const { moedas } = this.props;
    const currenciesFiltered = Object.keys(moedas)
      .filter((currency) => currency !== 'USDT');
    return (
      <div>
        {currenciesFiltered.map((itens, index) => (
          <option key={ index }>
            { itens }
          </option>))}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  moedas: state.wallet.moedas,
});

Currencies.propTypes = {
  moedas: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps)(Currencies);
