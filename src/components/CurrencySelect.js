import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionFetchApi } from '../actions';

class CurrencySelect extends Component {
  componentDidMount() {
    const { fetchApi } = this.props;
    fetchApi();
  }

  render() {
    const { value, onChange, currencies } = this.props;
    const keyCurrencies = Object.keys(currencies);
    const filterCurrencies = keyCurrencies.filter((item) => item !== 'USDT');
    const option = filterCurrencies.map(
      (item) => (<option value={ item } key={ item }>{ item }</option>),
    );

    return (
      <label htmlFor="currency">
        Moeda:
        <select value={ value } onChange={ onChange } id="currency" name="currency">
          { option }
        </select>
      </label>
    );
  }
}

CurrencySelect.defaultProps = {
  currencies: {},
};

CurrencySelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  fetchApi: PropTypes.func.isRequired,
  currencies: PropTypes.shape({}),
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchApi: () => dispatch(actionFetchApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySelect);
