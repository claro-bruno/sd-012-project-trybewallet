import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../actions';

const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const currencies = [
  'USD',
  'CAD',
  'EUR',
  'GBP',
  'ARS',
  'BTC',
  'LTC',
  'JPY',
  'CHF',
  'AUD',
  'CNY',
  'ILS',
  'ETH',
  'XRP',
];

// prettier-ignore
class ExpenseForm extends React.Component {
  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  render() {
    const { wallet } = this.props;
    console.log(wallet);
    return (
      <form>
        <label htmlFor="amount-input">
          Valor:
          <input type="text" id="amount-input" className="form__field" />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input type="text" id="description-input" className="form__field" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" className="form__field">
            {currencies.map((currency) => <option key={ currency }>{currency}</option>)}
          </select>
        </label>
        <label htmlFor="method-input">
          Método de pagamento:
          <select id="method-input" className="form__field">
            {paymentMethods.map((method) => (
              <option key={ method }>{method}</option>
            ))}
          </select>
        </label>
        <label htmlFor="method-input">
          Tag:
          <select
            data-testid="method-input"
            id="method-input"
            className="form__field"
          >
            {tags.map((tag) => (
              <option key={ tag }>{tag}</option>
            ))}
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  fetch: () => {
    dispatch(fetchCurrencies());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);

ExpenseForm.propTypes = {
  fetch: PropTypes.func.isRequired,
  wallet: PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.string),
    expenses: PropTypes.arrayOf(PropTypes.string),
    isLoading: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
};
