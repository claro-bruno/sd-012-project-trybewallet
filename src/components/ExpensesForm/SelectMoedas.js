import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getKeys } from '../../actions/index';

class SelectMoedas extends Component {
  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  render() {
    // console.log(this.props);
    const { currencies, value, onChange } = this.props;
    return (
      <label htmlFor="moeda">
        Moeda
        <select
          name="currency"
          id="moeda"
          value={ value }
          onChange={ onChange }
        >
          {
            currencies.map((currency) => (
              <option key={ currency }>{ currency }</option>
            ))
          }
        </select>
      </label>
    );
  }
}

// fazer um map com as moedas da action
const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: (currency) => dispatch(getKeys(currency)),
});
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

SelectMoedas.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchCurrency: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(SelectMoedas);
