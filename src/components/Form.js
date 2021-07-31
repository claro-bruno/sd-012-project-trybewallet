import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI } from '../actions';

class Form extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="number" id="value" />
        </label>
        <label htmlFor="describe">
          Descrição:
          <input type="text" id="describe" />
        </label>
        <label htmlFor="selectCurrency">
          Moeda:
          <select id="selectCurrency">
            {currencies.map((currency, index) => (
              <option key={ index }>{currency}</option>
            ))}
          </select>
        </label>
        <label htmlFor="selectPaymentType">
          Método de pagamento:
          <select id="selectPaymentType">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="selectTag">
          Tag:
          <select id="selectTag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="button">Adicionar despesa</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    currencies: state.wallet.currencies,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCurrencies: () => dispatch(fetchAPI()),
  };
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
