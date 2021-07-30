import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';

// const expenseCategory = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
class AddExpenses extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { loading, currencies } = this.props;
    const currencyLength = 3;
    const filteredCurrencies = [...currencies]
      .filter((currency) => currency.length === currencyLength);
    if (loading) { return <p>CARREGANDO...</p>; }
    return (
      <form className="expenses-form">
        <label htmlFor="value">
          Valor
          <input type="number" id="value" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select name="currency" id="currency">
            {filteredCurrencies.map((currency) => (
              <option key={ currency } value={ currency }>{currency}</option>
            ))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de Pagamento
          <select name="payment-method" id="payment">
            <option value="money">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Tag
          <select name="category" id="category">
            <option value="food">Alimentação</option>
            <option value="enterteinement">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>

          </select>
          <label htmlFor="description">
            Descrição
            <textarea id="description" type="text" />
          </label>
        </label>
      </form>
    );
  }
}

AddExpenses.propTypes = {
  loading: PropTypes.bool.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  error: state.wallet.error,
  loading: state.wallet.isFetching,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenses);
